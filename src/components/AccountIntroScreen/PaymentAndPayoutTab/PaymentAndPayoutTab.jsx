import React from 'react';
import { useState, useEffect } from 'react';

import { Animated, KeyboardAvoidingView, Platform } from 'react-native';
import { useForm, Controller } from "react-hook-form";
// Components
import AccountsTabHeader from '../AccountsTabHeader'
import PaymentMethods from './PaymentMethods'
import CurrencyPopup from './CurrencyPopup'

// Helpers
import { getWindowDimension } from '@/components/helpers/getWindowDimension'
import { useAnimateOfferPreview } from './useAnimateOfferPreview';
import { isKeyboardShown } from '@/components/helpers/isKeyboardShown'
import { backHandler } from '../backHandler'
// Images
import IMAGES from '@/res/images'
const {
    GoBackIcon
} = IMAGES;
// Variables
import C from '@/res/colors'
import F from '@/res/fonts'
import { S } from '@/res/strings'
// Styles
import { style } from './style'
const {
    FilterContainer,
    AccountLinkList,
    AccountLink,
    AccountLinkText,
    AccountLinkCurrencyValue,
    AccountLinkIcon,
} = style;
// Mixins
import { M } from '@/res/mixin'
const {
    ErrorMessage,
    ShowPasswordIconButton,
} = M;
// Store
import { observer } from 'mobx-react-lite';
import { runInAction, set } from 'mobx';

import { useAccountApiStore } from '@/stores/AccountApi';

const PaymentAndPayoutTab = observer(({ isOpenTab, isContractor }) => {
    const { windowHeight, windowWidth } = getWindowDimension()

    // Animation
    const { onPress, width } = useAnimateOfferPreview()

    // Initial show tab 
    useEffect(() => {
        if (isOpenTab === true) { onPress(true) }
    }, [isOpenTab]);

    // Store
    const { contractorAccountDataApi, musicianAccountDataApi, setOpenTabs } = useAccountApiStore();

    // Handler for native back button
    const tabNameToClose = 'Payments and Payouts'
    backHandler(onPress, setOpenTabs, tabNameToClose);
    // Paymeets state
    const [isOpenPayments, setOpenPayments] = useState(false);

    // Currency state
    const [isOpenCurrency, setOpenCurrency] = useState(false);
    const [selectedCurrencyType, setCurrencyValue] = useState('USD - $');

    // User currency types
    const userCurrencyType = isContractor === true ? contractorAccountDataApi[0].userCurrencyType : musicianAccountDataApi[0].userCurrencyType

    // Set user currency type
    useEffect(() => {
        if (userCurrencyType !== undefined || userCurrencyType !== null) {
            setCurrencyValue(userCurrencyType)
        }
    }, [userCurrencyType]);

    // useEffect(() => {
    //     if (userCurrencyType !== selectedCurrencyType) {
    //         runInAction(() => {
    //             set(contractorAccountDataApi[0], "userCurrencyType", selectedCurrencyType)
    //         })
    //     }
    // }, [selectedCurrencyType, userCurrencyType]);

    return (
        <Animated.View style={{
            zIndex: 1000,
            height: windowHeight,
            width: windowWidth,
            // width,
            justifyContent: 'center',
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
        }}
        >
            <FilterContainer
                style={{
                    height: windowHeight,
                    width: windowWidth,
                }}
            >

                {/* Header */}
                <AccountsTabHeader tabName={'Payments and Payouts'} setOpenTabs={setOpenTabs} onPress={onPress} />

                {/* Link list */}
                <AccountLinkList>
                    {/* Payment Methods */}
                    <AccountLink
                        onPress={() => {
                            setOpenPayments(true)
                        }}>
                        <AccountLinkText>Payment Methods</AccountLinkText>

                        <AccountLinkIcon>
                            <GoBackIcon width={9} height={16} />
                        </AccountLinkIcon>
                    </AccountLink>

                    {/* Payout Methods */}
                    <AccountLink
                        onPress={() => {

                        }}>
                        <AccountLinkText>Payout Methods</AccountLinkText>

                        <AccountLinkIcon>
                            <GoBackIcon width={9} height={16} />
                        </AccountLinkIcon>
                    </AccountLink>

                    {/* Currency */}
                    <AccountLink
                        style={{
                            borderBottomWidth: 0,
                        }}
                        onPress={() => {
                            setOpenCurrency(true)
                        }}>
                        <AccountLinkText>Currency</AccountLinkText>

                        <AccountLinkCurrencyValue>
                            {selectedCurrencyType}
                        </AccountLinkCurrencyValue>
                    </AccountLink>

                </AccountLinkList>

            </FilterContainer>

            {/* Payment Methods */}
            {isOpenPayments && <PaymentMethods
                isPayments={true}
                isOpen={isOpenPayments}
                setOpen={setOpenPayments}
            />
            }
            {/* Currency popup */}
            {isOpenCurrency && <CurrencyPopup
                currencyTypes={S.currencyTypes}
                isOpenBottomPopup={isOpenCurrency}
                setOpenBottomPopup={setOpenCurrency}
                setCurrencyType={setCurrencyValue}
                selectedCurrencyType={selectedCurrencyType}
            />}

        </Animated.View >
    )
})

export default PaymentAndPayoutTab;

