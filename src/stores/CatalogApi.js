import React from 'react';
import { makeAutoObservable, action, observable } from 'mobx';
import { apiMocks } from '@/api/mock/apiMocks'

class CatalogApi {
    catalog = []
    isGallery = true
    isSingle = true

    constructor() {
        makeAutoObservable(this, {
            catalog: observable,
            isGallery: observable,
            isSingle: observable,
            resetState: action.bound,
            setMap: action.bound,
            setGallery: action.bound,
            setCatalog: action.bound,
            setSingleInitial: action.bound,
            setSingleObject: action.bound,
            setComplex: action.bound,
        })
    }
    setMap() {
        this.isGallery = false
    }
    setGallery() {
        this.isGallery = true
    }
    resetState() {
        this.catalog = []
        this.catalog.length === 0 && this.setGallery()
    }
    // Complex
    setSingleInitial() {
        this.isSingle = true
    }
    setSingleObject(isApartment) {
        const api = isApartment ? apiMocks.ApartmentMockApi : apiMocks.HousesMockApi
        this.resetState()
        this.catalog = api
        this.isSingle = true
    }
    setComplex(isApartment) {
        const api = isApartment ? apiMocks.ApartmentComplexMockApi : apiMocks.ApartmentComplexMockApi
        this.resetState()
        this.catalog = api
        this.isSingle = false
    }
    setCatalog(route) {

        if (route === 'Объявления User' || route === 'Объявления Realtor') {
            this.resetState()
            return this.catalog = apiMocks.RecommendationMockApi
        } else if (route === 'ApartmentsPage' || route === 'ApartmentsPageRealtor') {
            return this.setSingleObject(true)
        } else if (route === 'HousesPage' || route === 'HousesPageRealtor') {
            return this.setSingleObject(false)
        } else if (route === 'PlotsPage' || route === 'PlotsPageRealtor') {
            this.resetState()
            return this.catalog = apiMocks.PlotMockApi
        } else if (route === 'CommercePage' || route === 'CommercePageRealtor') {
            this.resetState()
            return this.catalog = apiMocks.CommerceMockApi
        } else if (route === 'RentPage' || route === 'RentPageRealtor') {
            this.resetState()
            return this.catalog = apiMocks.RentMockApi
        } else if (route === 'NoveltiesPage' || route === 'NoveltiesPageRealtor') {
            this.resetState()
            return this.catalog = apiMocks.NoveltiesMockApi;
        }
        else {
            return
        }
    }
}

const catalogApiStore = new CatalogApi();

export const CatalogApiStoreStoreContext = React.createContext(catalogApiStore);
export const useCatalogApiStore = () => React.useContext(CatalogApiStoreStoreContext)


