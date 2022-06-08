import React from 'react';
import { makeAutoObservable, action, observable } from 'mobx';
import { apiMocks } from '@/api/mock/apiMocks'

import { rateAverageCount } from '@/components/helpers/rateAverageCount'
class SearchApi {
    musicianList = []
    vendorList = []

    constructor() {
        makeAutoObservable(this, {
            musicianList: observable,
            vendorList: observable,
            resetState: action.bound,
            setList: action.bound,
            sortPopular: action.bound,
        })
    }

    resetState() {
        this.musicianList = []
        this.vendorList = []
    }
    sortPopular(data, isContractor) {
        const dataWithAverageRate = data.map((item) => {
            const reviewObject = isContractor === true ? item.userReview : item.adReview
            const averageRate = rateAverageCount(reviewObject)
            item.averageRate = averageRate
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
        else {
            return
        }
    }
}

const searchApiStore = new SearchApi();

export const SearchApiStoreStoreContext = React.createContext(searchApiStore);
export const useSearchApiStore = () => React.useContext(SearchApiStoreStoreContext)


