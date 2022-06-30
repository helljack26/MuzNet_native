import React from 'react';
import {
    PermissionsAndroid,
    Platformn
} from "react-native";
import { makeAutoObservable, action, runInAction, observable } from 'mobx';
import { apiMocks } from '@/api/mock/apiMocks'

class AccountApi {
    contractorAccountData = {
        userType: 'Contractor',
        contractorPosition: 'Manager',
        userNickName: 'Annie96',
        userName: 'Annie',
        userSurName: 'Smith',
        userAvatar: require('../../assets/Mock/Georgia.png'),
        userDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
        userEmail: 'user1@gmail.com',
        userLocation: 'Victoria, Ballarat',
        userAddress: '40 Lydiard St N',
        userPhoneNumber: '+1 000 753 6735',
    }
    musicianAccountData = {
        userType: 'Contractor',
        userMusicianType: "Band",
        userNickName: 'Annie96',
        userName: 'Annie',
        userSurName: 'Smith',
        userAvatar: require('../../assets/Mock/Georgia.png'),
        userDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
        userEmail: 'user1@gmail.com',
        userLocation: 'Victoria, Ballarat',
        userAddress: '40 Lydiard St N',
        userPhoneNumber: '+1 000 753 6735',
        userGenres: ["Classical", "Jazz", "Pop",],
        userMusicalInstrument: ["Harp", "Piano"],
        willingToTravel: true,
        userSkills: {
            singByEar: true,
            playByEar: true,
            readSheetMusic: true,
        },
    }

    isOpenPersonalInfoTab = false
    isOpenPaymentTab = false
    isOpenChangePasswordTab = false
    isOpenNotificationTab = false
    isOpenMyAdsTab = false
    isOpenTermsAndServicesTab = false

    paymentDetails = {}
    constructor() {
        makeAutoObservable(this, {
            contractorAccountData: observable,
            isOpenPersonalInfoTab: observable,
            isOpenPaymentTab: observable,
            isOpenChangePasswordTab: observable,
            isOpenNotificationTab: observable,
            isOpenMyAdsTab: observable,
            isOpenTermsAndServicesTab: observable,

            setOpenTabs: action.bound,
        })
    }

    setOpenTabs({ tabName, isOpen }) {
        const action = isOpen
        switch (tabName) {

            case "Personal Information":
                this.isOpenPersonalInfoTab = action;
                break;

            case "Payments and Payouts":
                this.isOpenPaymentTab = action;
                break;

            case "Change Password":
                this.isOpenChangePasswordTab = action;
                break;

            case "Notification":
                this.isOpenNotificationTab = action;
                break;

            case "My Ads":
                this.isOpenMyAdsTab = action;
                break;

            case "Terms of Service":
                this.isOpenTermsAndServicesTab = action;
                break;

            default:
                return
        }
    }

    resetState() {

    }
}

const AccountApiStore = new AccountApi();

export const AccountApiStoreContext = React.createContext(AccountApiStore);
export const useAccountApiStore = () => React.useContext(AccountApiStoreContext)


