import React from 'react';
import { Platform } from 'react-native';
import { makeAutoObservable, action, observable, runInAction } from 'mobx';
import { apiMocks } from '@/api/mock/apiMocks'

class LocationAutocompleteApi {
    locationList = []

    constructor() {
        makeAutoObservable(this, {
            locationList: observable,
            setLocationList: action.bound,
        })
    }

    setLocationList({ inputValue, type }) {
        const isFullAddress = type !== 'full' ? '&types=cities' : '&types=geocode'
        const iosMapApiKey = 'AIzaSyD-DV5jVOuC7XYA4ZlXATAQLCnyjs5wdC4'
        const androidMapApiKey = 'AIzaSyBoMLvM4rFyVORaYA7XJezdfElJ26huwsg'
        const GOOGLE_PACES_API_BASE_URL = 'https://maps.googleapis.com/maps/api/place'

        const GOOGLE_API_KEY = Platform.OS === 'ios' ? iosMapApiKey : androidMapApiKey
        const apiUrl = `${GOOGLE_PACES_API_BASE_URL}/autocomplete/json?key=${GOOGLE_API_KEY}${isFullAddress}&components=country:us|country:de|country:fr|country:gb|country:ca&input=${inputValue}`

        return fetch(apiUrl)
            .then((response) => response.json())
            .then((json) => {
                const { predictions } = json;
                const onlyDescription = predictions.map((item) => {
                    return item.description
                })
                runInAction(() => {
                    this.locationList = []
                    this.locationList = onlyDescription
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }
}

const LocationAutocompleteApiStore = new LocationAutocompleteApi();

export const LocationAutocompleteApiStoreStoreContext = React.createContext(LocationAutocompleteApiStore);
export const useLocationAutocompleteApiStore = () => React.useContext(LocationAutocompleteApiStoreStoreContext)


