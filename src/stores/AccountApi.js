import React from 'react';
import {
    PermissionsAndroid,
    Platformn
} from "react-native";
import { makeAutoObservable, action, runInAction, observable, set, get } from 'mobx';
import { apiMocks } from '@/api/mock/apiMocks'

class AccountApi {
    contractorAccountDataApi = [{
        id: 1,
        userType: 'Contractor',
        contractorPosition: 'Manager',
        userNickName: 'Annie96',
        userName: 'Annie',
        userSurName: 'Smith',
        userAvatar: [require('../../assets/Mock/Georgia.png')],
        userDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
        userEmail: 'user1@gmail.com',
        userPhoneNumber: '+1 000 753 6735',
        userLocation: 'Victoria, Ballarat',
    }]
    musicianAccountDataApi = [{
        userType: 'Musician',
        userMusicianType: "Musician",
        userNickName: 'Leo96',
        userName: 'Leo',
        userSurName: 'Balamut',
        userAvatar: [
            require('../../assets/Mock/Leo.png'),
            require('../../assets/Mock/Kate1.jpg'),
            require('../../assets/Mock/Blaze.png'),
            require('../../assets/Mock/Kate3.jpg'),
        ],
        userDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
        userEmail: 'user1@gmail.com',
        userLocation: 'Victoria, Ballarat',
        userAddress: '40 Lydiard St N',
        userPhoneNumber: '+1 000 753 6735',
        userGenres: ["Classical", "Jazz", "Pop",],
        userMusicalInstrument: ["Harp", "Piano"],
        userPricePerHour: 100,
        userPricePerHourCurrency: '$',
        willingToTravel: true,
        userSkills: {
            singByEar: true,
            playByEar: false,
            readSheetMusic: true,
        },
    }]

    isOpenPersonalInfoTab = false
    isOpenPaymentTab = false
    isOpenChangePasswordTab = false
    isOpenNotificationTab = false
    isOpenMyAdsTab = false
    isOpenTermsAndServicesTab = false

    paymentDetails = {}
    constructor() {
        makeAutoObservable(this, {
            contractorAccountDataApi: observable,
            musicianAccountDataApi: observable,
            isOpenPersonalInfoTab: observable,
            isOpenPaymentTab: observable,
            isOpenChangePasswordTab: observable,
            isOpenNotificationTab: observable,
            isOpenMyAdsTab: observable,
            isOpenTermsAndServicesTab: observable,

            setOpenTabs: action.bound,
            changeContactorAccountData: action.bound,
        })
    }

    changeContactorAccountData({ updatedData, id }) {

        set(contractorAccountDataApi, "userName", updatedData.userName);
        console.log("🚀 ~ file: AccountApi.js ~ line 71 ~ AccountApi ~ changeContactorAccountData ~ contractorAccountDataApi", contractorAccountDataApi)

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


}

const AccountApiStore = new AccountApi();

export const AccountApiStoreContext = React.createContext(AccountApiStore);
export const useAccountApiStore = () => React.useContext(AccountApiStoreContext)


