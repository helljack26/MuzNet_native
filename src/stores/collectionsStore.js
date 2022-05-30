import React from 'react';
import { makeAutoObservable, action, observable } from 'mobx';
import { apiMocks } from '@/api/mock/apiMocks'

class CollectionsApi {
    collections = []

    constructor() {
        makeAutoObservable(this, {
            collections: observable,
            setCollections: action.bound,
        })
    }
    setCollections() {
        this.collections = []
        return this.collections = apiMocks.CollectionsMockApi
    }
}

const collectionsApiStore = new CollectionsApi();

export const CollectionsApiStoreStoreContext = React.createContext(collectionsApiStore);
export const useCollectionsApiStore = () => React.useContext(CollectionsApiStoreStoreContext)