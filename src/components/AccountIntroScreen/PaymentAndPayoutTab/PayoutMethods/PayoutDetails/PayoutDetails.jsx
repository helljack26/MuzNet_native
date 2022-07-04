import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Animated, Keyboard, View, Pressable, KeyboardAvoidingView, Platform } from 'react-native';
import { useForm, Controller } from "react-hook-form";
// Components
import ChooseYourCountry from './ChooseYourCountry'
import ChooseHowToGetPaid from './ChooseHowToGetPaid'
import ChooseYourAccountType from './ChooseYourAccountType'
import AddAccountInfo from './AddAccountInfo'
// Helpers
import { getWindowDimension } from '@/components/helpers/getWindowDimension'
import { useAnimateCreateOffer } from './useAnimateCreateOffer';
import { isKeyboardShown } from '@/components/helpers/isKeyboardShown'
// Images
import IMAGES from '@/res/images'
const {
    CrossBlackIcon,
    GoBackIcon,
} = IMAGES;

// Store
import { observer } from 'mobx-react-lite';
import { runInAction, set } from 'mobx';

import { usePaymentAndPayoutApiStore } from '@/stores/PaymentAndPayoutApi';

const PayoutDetails = observer(() => {

    const { isOpenPayoutDetails, setOpenPayoutDetails, setPayoutDetails, isClosePayoutDetails, setClosePayoutDetails } = usePaymentAndPayoutApiStore();

    const isKeyboardOpen = isKeyboardShown()

    const { windowHeight, windowWidth } = getWindowDimension()
    // Steps shown state 
    const [isOpenChooseHowToGetPaid, setOpenChooseHowToGetPaid] = useState(false);
    const [isOpenChooseAccountType, setOpenChooseAccountType] = useState(false);
    const [isOpenAddAccountInfo, setOpenAddAccountInfo] = useState(false);

    const [selectedCountry, setSelectedCountry] = useState();
    const [selectedHowToGetPaid, setSelectedHowToGetPaid] = useState();
    const [selectedAccountType, setSelectedAccountType] = useState();

    const { onPress, width } = useAnimateCreateOffer()
    useEffect(() => {
        if (isOpenPayoutDetails === true) {
            onPress(true)
        }
    }, [isOpenPayoutDetails]);
    // Close tab
    const closeTab = () => {
        onPress(false)
        setTimeout(() => {
            if (isOpenAddAccountInfo === true) {
                setOpenAddAccountInfo(false)
            }
            setClosePayoutDetails(false)
        }, 600);
    }

    useEffect(() => {
        if (isClosePayoutDetails === true) { closeTab() }
    }, [isClosePayoutDetails]);

    const onSubmitPayoutDetails = (data) => {
        const newPayout = {
            country: selectedCountry,
            howToGetPaid: selectedHowToGetPaid,
            accountType: selectedAccountType,
            accountInfo: {
                cardHolderName: data.nameOnCard,
                routingNumber: data.routingNumber,
                accountNumber: data.accountNumber,
                confirmAccountNumber: data.confirmAccountNumber,
            },
        }
        console.log("🚀 ~ file: PayoutDetails.jsx ~ line 89 ~ onSubmitPayoutDetails ~ newPayout", newPayout)

        setPayoutDetails(newPayout)

        setOpenChooseHowToGetPaid(false)
        setOpenChooseAccountType(false)
        setSelectedCountry(undefined)
        setSelectedHowToGetPaid(undefined)
        setSelectedAccountType(undefined)
        // Clear input value
        Keyboard.dismiss()
        closeTab()

        return
    };

    return (
        <Animated.View style={{
            zIndex: 1015,
            height: windowHeight + 50,
            // width: windowWidth,
            width,
            justifyContent: 'center',
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
        }}
        >
            {/* Initial tab always show */}
            {isOpenPayoutDetails === true && <ChooseYourCountry
                selectedCountry={selectedCountry}
                setSelectedOption={setSelectedCountry}
                setOpenNextTab={setOpenChooseHowToGetPaid}
            />}

            {isOpenChooseHowToGetPaid === true && <ChooseHowToGetPaid
                selectedHowToGetPaid={selectedHowToGetPaid}
                setSelectedOption={setSelectedHowToGetPaid}
                isOpenTab={isOpenChooseHowToGetPaid}
                setOpenTab={setOpenChooseHowToGetPaid}
                setOpenNextTab={setOpenChooseAccountType}
            />
            }

            {isOpenChooseAccountType === true && <ChooseYourAccountType
                selectedAccountType={selectedAccountType}
                setSelectedOption={setSelectedAccountType}
                isOpenTab={isOpenChooseAccountType}
                setOpenTab={setOpenChooseAccountType}
                setOpenNextTab={setOpenAddAccountInfo}
            />
            }

            {isOpenAddAccountInfo === true && <AddAccountInfo
                isOpenTab={isOpenAddAccountInfo}
                setOpenTab={setOpenAddAccountInfo}
                onSubmitPayoutDetails={onSubmitPayoutDetails}
            />
            }
        </Animated.View >
    )
})

export default PayoutDetails;

