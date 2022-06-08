import React from 'react';
import { makeAutoObservable, action, observable } from 'mobx';
import { apiMocks } from '@/api/mock/apiMocks'

import { rateAverageCount } from '@/components/helpers/rateAverageCount'
class SearchApi {
    musicianList = []
    vendorList = []
    nothingWasFound = false

    constructor() {
        makeAutoObservable(this, {
            musicianList: observable,
            vendorList: observable,
            nothingWasFound: observable,
            resetState: action.bound,
            setList: action.bound,
            sortPopular: action.bound,
            searchInList: action.bound,
            setNothingWasFound: action.bound,
        })
    }

    setNothingWasFound() {
        this.nothingWasFound = false

    }
    resetState() {
        this.musicianList = []
        this.vendorList = []
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

    setList(route) {
        if (route === 'ContractorWelcomeScreen') {
            this.resetState()
            return this.musicianList = this.sortPopular(apiMocks.PerfomerMockApi, true)
        } else if (route === 'MusicianWelcomeScreen') {
            this.resetState()
            return this.vendorList = this.sortPopular(apiMocks.VendorMockApi, false)
        }
        else if (route === 'ContractorListSearchScreen') {
            this.resetState()
            return this.musicianList = apiMocks.PerfomerMockApi
        }
        else if (route === 'MusicianListSearchScreen') {
            this.resetState()
            return this.vendorList = apiMocks.VendorMockApi
        }
        else {
            return this.resetState()
        }
    }
    searchInList(searchString, route) {

        const compareLetterNumber = searchString.length
        if (route === 'ContractorListSearchScreen') {
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
            this.musicianList = removeAllUndefined.length !== 0 ? removeAllUndefined : apiMocks.PerfomerMockApi
            if (removeAllUndefined.length === 0) {
                this.nothingWasFound = true
            } else {
                this.nothingWasFound = false
            }
        }
        if (route === 'MusicianListSearchScreen') {
            const newLocalData = apiMocks.VendorMockApi.map((item) => {
                const slicedItem = item.adTitle.slice(0, compareLetterNumber).toLowerCase()
                if (slicedItem.includes(searchString.toLowerCase())) {
                    return item
                }
            })
            this.resetState()
            const removeAllUndefined = newLocalData.filter((el) => el !== undefined);
            this.vendorList = removeAllUndefined.length !== 0 ? removeAllUndefined : apiMocks.VendorMockApi
            if (removeAllUndefined.length === 0) {
                this.nothingWasFound = true
            } else {
                this.nothingWasFound = false
            }
        }
    }
}

const searchApiStore = new SearchApi();

export const SearchApiStoreStoreContext = React.createContext(searchApiStore);
export const useSearchApiStore = () => React.useContext(SearchApiStoreStoreContext)


