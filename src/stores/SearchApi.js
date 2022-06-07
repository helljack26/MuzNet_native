import React from 'react';
import { makeAutoObservable, action, observable } from 'mobx';
import { apiMocks } from '@/api/mock/apiMocks'

class SearchApi {
    musicianList = []
    vendorList = []

    constructor() {
        makeAutoObservable(this, {
            musicianList: observable,
            vendorList: observable,
            resetState: action.bound,
            setList: action.bound,
        })
    }

    resetState() {
        this.musicianList = []
        this.vendorList = []
    }

    setList(route) {
        if (route === 'ContractorWelcomeScreen') {
            this.resetState()
            return this.musicianList = apiMocks.PerfomerMockApi
        } else if (route === 'MusicianWelcomeScreen') {
            return this.vendorList = apiMocks.PerfomerMockApi
        }
        else {
            return
        }
    }
}

const searchApiStore = new SearchApi();

export const SearchApiStoreStoreContext = React.createContext(searchApiStore);
export const useSearchApiStore = () => React.useContext(SearchApiStoreStoreContext)


