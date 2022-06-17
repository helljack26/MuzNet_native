import React from 'react';
import {
    PermissionsAndroid
} from "react-native";
import { makeAutoObservable, action, runInAction, observable } from 'mobx';
import { apiMocks } from '@/api/mock/apiMocks'


import * as Location from 'expo-location';
import Geocoder from 'react-native-geocoding';
import { rateAverageCount } from '@/components/helpers/rateAverageCount'
import { apiKey } from '@/res/apiKey'
class MapSearchApi {
    musicianMapData = []
    vendorMapData = []
    userCurrentCoords = {}
    userProfileCoords = {}

    isOpenFilters = false

    constructor() {
        makeAutoObservable(this, {
            musicianMapData: observable,
            vendorMapData: observable,
            userCurrentCoords: observable,
            userProfileCoords: observable,
            isGrantedLocationPermission: observable,
            isOpenFilters: observable,

            resetState: action.bound,
            setMapData: action.bound,
            setUserCurrentCoords: action.bound,
            setUserProfileCoords: action.bound,
            searchInList: action.bound,
            setOpenFilters: action.bound,
        })
    }

    setOpenFilters(boolean) {
        this.isOpenFilters = boolean
    }

    resetState() {
        this.musicianMapData = []
        this.vendorMapData = []
    }

    setUserProfileCoords(userProfileLocation) {
        (async () => {
            Geocoder.init(apiKey.geocodingApiKey);
            // Search by address
            Geocoder.from(userProfileLocation)
                .then(json => {
                    const result = json.results[0].geometry;
                    if (result.length > 0) {
                        const oneDegreeOfLongitudeInMeters = 111.32 * 950;
                        const circumference = (40075 / 360) * 950;
                        const latDelta = result[0].accuracy * (1 / (Math.cos(result[0].latitude) * circumference));
                        const lonDelta = (result[0].accuracy / oneDegreeOfLongitudeInMeters);
                        const userProfileRegion = {
                            region: {
                                latitude: result[0].lat,
                                longitude: result[0].lng,
                            }
                        }
                        runInAction(() => {
                            this.userProfileCoords = {}
                            return this.userProfileCoords = userProfileRegion
                        })
                    }
                })
                .catch(error => console.warn(error));

        })();
    }

    setUserCurrentCoords() {
        const getUserCoords = async () => {
            const location = await Location.getCurrentPositionAsync({});

            const oneDegreeOfLongitudeInMeters = 111.32 * 1000;
            const circumference = (40075 / 360) * 1000;

            const latDelta = location.coords.accuracy * (1 / (Math.cos(location.coords.latitude) * circumference));
            const lonDelta = (location.coords.accuracy / oneDegreeOfLongitudeInMeters);

            const userProfileRegion = {
                region: {
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: latDelta,
                    longitudeDelta: lonDelta,
                }
            }
            runInAction(() => {

                return this.userCurrentCoords = userProfileRegion;
            })
        }

        PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        ).then((status) => {

            ////////////////////
            if (status === 'granted') {
                getUserCoords()
            }

            if (status === 'denied' || status === 'never_ask_again') {
                runInAction(() => {
                    return this.userCurrentCoords = {}
                })
            }
        })

    }

    setMapData(route) {
        if (route === 'ContractorMapSearchScreen') {
            this.resetState()
            return this.musicianMapData = apiMocks.PerfomerMockApi
        }
        else if (route === 'MusicianMapSearchScreen') {
            this.resetState()
            return this.vendorMapData = apiMocks.VendorMockApi
        }
        else {
            return this.resetState()
        }
    }

    searchInList(searchString, route) {
        const compareLetterNumber = searchString.length
        if (route === 'ContractorMapSearchScreen') {
            const newLocalData = apiMocks.PerfomerMockApi.map((item, id) => {
                const slicedItem = item.userFullName.slice(0, compareLetterNumber).toLowerCase()
                if (slicedItem.includes(searchString.toLowerCase())) {
                    return item
                } else {
                    return
                }
            })
            this.resetState()
            const removeAllUndefined = newLocalData.filter((el) => el !== undefined);
            this.musicianMapData = removeAllUndefined.length !== 0 ? removeAllUndefined : apiMocks.PerfomerMockApi
            if (removeAllUndefined.length === 0) {
                this.nothingWasFound = true
            } else {
                this.nothingWasFound = false
            }
        }
        if (route === 'MusicianMapSearchScMapData') {
            const newLocalData = apiMocks.VendorMockApi.map((item) => {
                const slicedItem = item.adTitle.slice(0, compareLetterNumber).toLowerCase()
                if (slicedItem.includes(searchString.toLowerCase())) {
                    return item
                }
            })
            this.resetState()
            const removeAllUndefined = newLocalData.filter((el) => el !== undefined);
            this.vendorMapData = removeAllUndefined.length !== 0 ? removeAllUndefined : apiMocks.VendorMockApi
        }
    }
}

const MapSearchApiStore = new MapSearchApi();

export const MapSearchApiStoreStoreContext = React.createContext(MapSearchApiStore);
export const useMapSearchApiStore = () => React.useContext(MapSearchApiStoreStoreContext)


