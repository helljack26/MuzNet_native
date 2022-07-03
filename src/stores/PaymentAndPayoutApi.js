import React from 'react';
import {
    PermissionsAndroid,
    Platformn
} from "react-native";
import { makeAutoObservable, action, runInAction, observable } from 'mobx';
import { apiMocks } from '@/api/mock/apiMocks'
// offerDetails = {
//     offerAdditionalInfo:'', 
//             offerDate: {
//         milliseconds: '',
//         string: '',
//     },
//     offerDuration: 0,
//     offerStartTime: {
//         milliseconds: '',
//         string: '',
//     },
//     offerEndTime: {
//         milliseconds: '',
//         string: "",
//     },
//     offerLocation: '',
//     offerPhoneNumber: '',
//     offerPricePerHour: '',
//     offerTotalMoney: 0,
// }
class PaymentAndPayoutApi {

    isOpenPaymentDetails = false
    isClosePaymentDetails = false
    paymentDetails = {}
    constructor() {
        makeAutoObservable(this, {
            isOpenPaymentDetails: observable,
            isClosePaymentDetails: observable,
            paymentDetails: observable,

            setOpenPaymentDetails: action.bound,
            setClosePaymentDetails: action.bound,
            setPaymentDetails: action.bound,
        })
    }

    setOpenPaymentDetails(boolean) {
        this.isOpenPaymentDetails = boolean
    }
    setClosePaymentDetails(boolean) {
        this.isOpenPaymentDetails = false
        this.isClosePaymentDetails = boolean
    }

    setPaymentDetails(details) {
        this.paymentDetails = details
    }

}

const PaymentAndPayoutApiStore = new PaymentAndPayoutApi();

export const PaymentAndPayoutApiStoreStoreContext = React.createContext(PaymentAndPayoutApiStore);
export const usePaymentAndPayoutApiStore = () => React.useContext(PaymentAndPayoutApiStoreStoreContext)


