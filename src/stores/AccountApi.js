import React from 'react';
import {
    PermissionsAndroid,
    Platform
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
        userCurrencyType: 'JMD-$',
        userSurName: 'Smith',
        userAvatar: [require('../../assets/Mock/Georgia.png')],
        userDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
        userEmail: 'user1@gmail.com',
        userPhoneNumber: '+1 000 753 6735',
        userLocation: 'Victoria, Ballarat',
        contractorAds: [
            {
                id: 8518582,
                adImage: [
                    require('../../assets/Mock/vendors/vendor1.png'),
                    require('../../assets/Mock/vendors/vendor2.png'),
                    require('../../assets/Mock/vendors/vendor3.png'),
                ],
                userPricePerHour: 100,
                userCurrencyType: '$',
                adDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat ea commodo...",
                adDate: {
                    milliseconds: 55800000,
                    string: 'Wednesday, Jun 29',
                },
                eventStart: {
                    milliseconds: 55800000,
                    string: "03:30pm",
                },
                eventEnd: {
                    milliseconds: 73800000,
                    string: "06:30pm",

                },
                adTitle: "Aloft Asheville",
                adLocation: "Victoria, Ballarat",
                adAddress: "1347 McGee Avenue, Berkeley, CA 94703 Berkeley California United States",
                coordinate: {
                    latitude: 37.88068574665098,
                    longitude: -122.2798887321131,
                    latitudeDelta: 0.04864195044303443,
                    longitudeDelta: 0.040142817690068,
                },
                willingToTravel: true,
                adTypeOfMusician: 'Musician',
                adSkills: {
                    singByEar: true,
                    playByEar: true,
                    readSheetMusic: false,
                },
                adGenres: ["Classical", "Jazz", "Pop",],
                adMusicalInstrument: ["Harp", "Piano"],
                adReview: [
                    {
                        reviewDate: 1652541822755,
                        reviewRate: 2,
                        reviewWritter: 'Kelvin Pearson',
                        reviewerAvatar: require('../../assets/Mock/reviewer/reviewer1.png'),
                        reviewMessage: 'What a fabulous night for my Dad’s birthday – everyone was so impressed, he was outstanding. Neil was professional, adaptable and sociable. I would recommend him 100%. Brilliant!',
                    },
                    {
                        reviewDate: 1652533322758,
                        reviewRate: 5,
                        reviewWritter: 'Kelvin Pearson',
                        reviewerAvatar: require('../../assets/Mock/reviewer/reviewer2.png'),
                        reviewMessage: 'What a fabulous night for my Dad’s birthday – everyone was so impressed, he was outstanding. Neil was professional, adaptable and sociable. I would recommend him 100%. Brilliant!',
                    }
                    ,
                    {
                        reviewDate: 1652573322758,
                        reviewRate: 1,
                        reviewWritter: 'Kelvin Pearson',
                        reviewerAvatar: require('../../assets/Mock/reviewer/reviewer3.png'),
                        reviewMessage: 'He was outstanding. Neil was professional, adaptable and sociable. I would recommend him 100%. Brilliant!',
                    },
                    {
                        reviewDate: 1652533322758,
                        reviewRate: 5,
                        reviewWritter: 'Kelvin Pearson',
                        reviewerAvatar: require('../../assets/Mock/reviewer/reviewer1.png'),
                        reviewMessage: 'What a fabulous night for my Dad’s birthday – everyone was so impressed, he was outstanding. Neil was professional, adaptable and sociable. I would recommend him 100%. Brilliant!',
                    }
                    ,
                    {
                        reviewDate: 1652541822755,
                        reviewRate: 4,
                        reviewWritter: 'Kelvin Pearson',
                        reviewerAvatar: require('../../assets/Mock/reviewer/reviewer2.png'),
                        reviewMessage: 'What a fabulous night for my Dad’s birthday – everyone was so impressed, he was outstanding. Neil was professional, adaptable and sociable. I would recommend him 100%. Brilliant!',
                    },
                ]
            },

            {
                id: 1855674,
                adImage: [
                    require('../../assets/Mock/vendors/vendor3.png'),
                    require('../../assets/Mock/vendors/vendor1.png'),
                    require('../../assets/Mock/vendors/vendor2.png'),
                ],
                userPricePerHour: 150,
                userCurrencyType: '$',
                adDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat ea commodo...",
                adDate: {
                    milliseconds: 55800000,
                    string: 'Wednesday, Jun 29',
                },
                eventStart: {
                    milliseconds: 55800000,
                    string: "03:30pm",
                },
                eventEnd: {
                    string: "06:30pm",
                    milliseconds: 73800000,
                },

                adTitle: "Le Bernandin",
                adLocation: "Victoria, Ballarat",
                adAddress: "1632 Spruce Street, Berkeley, CA 94709 Berkeley California United States",
                coordinate: {
                    latitude: 37.87756939233716,
                    longitude: -122.26555500713751,
                    latitudeDelta: 0.04864195044303443,
                    longitudeDelta: 0.040142817690068,
                },
                willingToTravel: true,
                adTypeOfMusician: 'Band',
                adSkills: {
                    singByEar: true,
                    playByEar: true,
                    readSheetMusic: true,
                },
                adGenres: ["Classical", "Jazz", "Pop",],
                adMusicalInstrument: ["Harp", "Piano"],
                adReview: [
                    {
                        reviewDate: 1652541822755,
                        reviewRate: 5,
                        reviewWritter: 'Kelvin Pearson',
                        reviewerAvatar: require('../../assets/Mock/reviewer/reviewer1.png'),
                        reviewMessage: 'What a fabulous night for my Dad’s birthday – everyone was so impressed, he was outstanding. Neil was professional, adaptable and sociable. I would recommend him 100%. Brilliant!',
                    },
                    {
                        reviewDate: 1652533322758,
                        reviewRate: 5,
                        reviewWritter: 'Kelvin Pearson',
                        reviewerAvatar: require('../../assets/Mock/reviewer/reviewer2.png'),
                        reviewMessage: 'What a fabulous night for my Dad’s birthday – everyone was so impressed, he was outstanding. Neil was professional, adaptable and sociable. I would recommend him 100%. Brilliant!',
                    }
                    ,
                    {
                        reviewDate: 1652573322758,
                        reviewRate: 3,
                        reviewWritter: 'Kelvin Pearson',
                        reviewerAvatar: require('../../assets/Mock/reviewer/reviewer3.png'),
                        reviewMessage: 'He was outstanding. Neil was professional, adaptable and sociable. I would recommend him 100%. Brilliant!',
                    },
                    {
                        reviewDate: 1652533322758,
                        reviewRate: 2,
                        reviewWritter: 'Kelvin Pearson',
                        reviewerAvatar: require('../../assets/Mock/reviewer/reviewer1.png'),
                        reviewMessage: 'What a fabulous night for my Dad’s birthday – everyone was so impressed, he was outstanding. Neil was professional, adaptable and sociable. I would recommend him 100%. Brilliant!',
                    }
                    ,
                    {
                        reviewDate: 1652541822755,
                        reviewRate: 4,
                        reviewWritter: 'Kelvin Pearson',
                        reviewerAvatar: require('../../assets/Mock/reviewer/reviewer2.png'),
                        reviewMessage: 'What a fabulous night for my Dad’s birthday – everyone was so impressed, he was outstanding. Neil was professional, adaptable and sociable. I would recommend him 100%. Brilliant!',
                    },
                ]
            },
        ],
        userNotification: {
            userNewReview: false,
            userNewOffer: true,
            userNewMessage: false,
            userNewProfileView: true,
            userLoginAtteptOnAccount: false,
            userTransaction: false,
        }
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
        userCurrencyType: 'JMD-$',
        willingToTravel: true,
        userSkills: {
            singByEar: true,
            playByEar: false,
            readSheetMusic: true,
        },
        userNotification: {
            userNewReview: false,
            userNewOffer: true,
            userNewMessage: false,
            userNewProfileView: true,
            userLoginAtteptOnAccount: false,
            userTransaction: false,
        }
    }]

    isOpenPersonalInfoTab = false
    isOpenPaymentTab = false
    isOpenChangePasswordTab = false
    isOpenNotificationTab = false
    isOpenMyAdsTab = false
    isOpenEditAd = false
    adIdForEdit = 0
    isOpenTermOfServiceTab = false

    constructor() {
        makeAutoObservable(this, {
            contractorAccountDataApi: observable,
            musicianAccountDataApi: observable,
            userNotification: observable,

            isOpenPersonalInfoTab: observable,
            isOpenPaymentTab: observable,
            isOpenChangePasswordTab: observable,
            isOpenNotificationTab: observable,
            isOpenMyAdsTab: observable,
            isOpenEditAd: observable,
            adIdForEdit: observable,
            isOpenTermOfServiceTab: observable,

            setOpenTabs: action.bound,
            setAdIdForEdit: action.bound,
            changeContactorAccountData: action.bound,
        })
    }

    changeContactorAccountData({ updatedData, id }) {
        set(contractorAccountDataApi, "userName", updatedData.userName);
    }

    setOpenTabs({ tabName, isOpen }) {
        const action = isOpen
        switch (tabName) {

            case "Personal Info":
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

            case "Edit ad":
                this.isOpenEditAd = action;
                break;

            case "Terms of Service":
                this.isOpenTermOfServiceTab = action;
                break;

            default:
                return
        }
    }

    setAdIdForEdit(id) {
        this.adIdForEdit = id;

    }
}

const AccountApiStore = new AccountApi();

export const AccountApiStoreContext = React.createContext(AccountApiStore);
export const useAccountApiStore = () => React.useContext(AccountApiStoreContext)


