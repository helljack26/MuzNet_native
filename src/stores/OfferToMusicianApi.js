import React from 'react';
import {
    PermissionsAndroid,
    Platformn
} from "react-native";
import { makeAutoObservable, action, runInAction, observable } from 'mobx';
import { apiMocks } from '@/api/mock/apiMocks'

class OfferToMusicianApi {
    offerDetails = {
        offerAdditionalInfo: '',
        offerDate: '',
        offerDuration: '',
        offerStartTime: '',
        offerEndTime: '',
        offerLocation: '',
        offerPhoneNumber: '',
        offerPricePerHour: '',
        offerTotalMoney: '',
    }

    isOpenCreateOffer = false
    isOpenOfferPreview = false
    isOpenPaymentDetails = false
    isPaySuccesful = false
    isPayError = false

    paymentDetails = {}
    constructor() {
        makeAutoObservable(this, {
            offerDetails: observable,
            paymentDetails: observable,
            isOpenCreateOffer: observable,
            isOpenOfferPreview: observable,
            isOpenPaymentDetails: observable,
            isPaySuccesful: observable,
            isPayError: observable,

            setOpenCreateOffer: action.bound,
            setOpenOfferPreview: action.bound,
            setOpenPaymentDetails: action.bound,
            setPaymentDetails: action.bound,
            setPaySucessful: action.bound,
            setPayError: action.bound,
            setOfferDetails: action.bound,
            resetState: action.bound,
        })
    }

    setOpenCreateOffer(boolean) {
        this.isOpenCreateOffer = boolean
    }

    setOpenOfferPreview(boolean) {
        this.isOpenOfferPreview = boolean
    }

    setOpenPaymentDetails(boolean) {
        this.isOpenPaymentDetails = boolean
    }

    setPaymentDetails(details) {
        this.paymentDetails = details
    }
    setPaySucessful(boolean) {
        this.isPaySuccesful = boolean
    }
    setPayError(boolean) {
        this.isPayError = boolean
    }

    setOfferDetails(data) {
        this.offerDetails = data
    }

    resetState() {

    }
}

const OfferToMusicianApiStore = new OfferToMusicianApi();

export const OfferToMusicianApiStoreStoreContext = React.createContext(OfferToMusicianApiStore);
export const useOfferToMusicianApiStore = () => React.useContext(OfferToMusicianApiStoreStoreContext)


