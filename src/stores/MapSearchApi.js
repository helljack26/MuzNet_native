import React from 'react';
import { makeAutoObservable, action, observable } from 'mobx';
import { apiMocks } from '@/api/mock/apiMocks'

import { rateAverageCount } from '@/components/helpers/rateAverageCount'
class MapSearchApi {
    musicianMapData = []
    vendorMapData = []

    isOpenFilters = false

    constructor() {
        makeAutoObservable(this, {
            musicianMapData: observable,
            vendorMapData: observable,
            isOpenFilters: observable,
            resetState: action.bound,
            setMapData: action.bound,
            sortPopular: action.bound,
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
    sortPopular(data, isContractor) {
        const dataWithAverageRate = data.map((item) => {
            const reviewObject = isContractor === true ? item.userReview : item.adReview
            item.averageRate = rateAverageCount(reviewObject)
            return item
        })

        const sortedByAverageRate = dataWithAverageRate.sort((a, b) => a.averageRate < b.averageRate ? 1 : -1);
        return sortedByAverageRate
    }

    setMapData(route) {
        console.log("🚀 ~ file: MapSearchApi.js ~ line 46 ~ MapSearchApi ~ setMapData ~ route", route)
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


