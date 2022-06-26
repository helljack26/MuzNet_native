import React from 'react';
import {
    PermissionsAndroid,
    Platformn
} from "react-native";
import { makeAutoObservable, action, runInAction, observable } from 'mobx';
import { apiMocks } from '@/api/mock/apiMocks'

class OfferToMusicianApi {
    offerDetails = {}

    isOpenCreateOffer = false

    constructor() {
        makeAutoObservable(this, {
            offerDetails: observable,
            isOpenCreateOffer: observable,

            setOpenCreateOffer: action.bound,
            resetState: action.bound,
            setOfferDetails: action.bound,
        })
    }

    setOpenCreateOffer(boolean) {
        this.isOpenCreateOffer = boolean
    }

    resetState() {

    }

    setOfferDetails(offer) {
        console.log("🚀 ~ file: OfferToMusicianApi.js ~ line 35 ~ OfferToMusicianApi ~ setOfferDetails ~ offer", offer)

    }
}

const OfferToMusicianApiStore = new OfferToMusicianApi();

export const OfferToMusicianApiStoreStoreContext = React.createContext(OfferToMusicianApiStore);
export const useOfferToMusicianApiStore = () => React.useContext(OfferToMusicianApiStoreStoreContext)


