import React from 'react';
import { useState, useEffect } from 'react';

import { Animated, KeyboardAvoidingView, Platform } from 'react-native';
import { useForm, Controller } from "react-hook-form";
// Components
import AccountsTabHeader from '../AccountsTabHeader'
import SwitchToggle from "react-native-switch-toggle";
// Helpers
import { getWindowDimension } from '@/components/helpers/getWindowDimension'
import { useAnimateOfferPreview } from './useAnimateOfferPreview';
import { isKeyboardShown } from '@/components/helpers/isKeyboardShown'
import { backHandler } from '../backHandler'

// Variables
import C from '@/res/colors'
import F from '@/res/fonts'
import { S } from '@/res/strings'
// Styles
import { style } from './style'
const {
    FilterContainer,
    NotificationRow,
    NotificationRowText,
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

const NotificationTab = observer(({ isOpenTab }) => {
    // Store
    const { userNotification, setOpenTabs } = useAccountApiStore();
    // Animation
    const { onPress, width } = useAnimateOfferPreview()
    useEffect(() => {
        if (isOpenTab === true) {
            onPress(true)
        }
    }, [isOpenTab]);


    // Handler for native back button
    const tabNameToClose = 'Notification'
    backHandler(onPress, setOpenTabs, tabNameToClose);

    const isKeyboardOpen = isKeyboardShown()

    const { windowHeight, windowWidth } = getWindowDimension()




    const [isNewReview, setNewReview] = useState(false);
    const [isNewOffer, setNewOffer] = useState(false);
    const [isNewMessage, setNewMessage] = useState(false);
    const [isNewProfileView, setNewProfileView] = useState(false);
    const [isLoginAtteptOnAccount, setLoginAtteptOnAccount] = useState(false);
    const [isTransaction, setTransaction] = useState(false);

    const userNewReviewFromStore = userNotification.userNewReview
    const userNewOfferFromStore = userNotification.userNewOffer
    const userNewMessageFromStore = userNotification.userNewMessage
    const userNewProfileViewFromStore = userNotification.userNewProfileView
    const userLoginAtteptOnAccountFromStore = userNotification.userLoginAtteptOnAccount
    const userTransactionFromStore = userNotification.userTransaction

    useEffect(() => {
        if (userNotification) {
            setNewReview(userNewReviewFromStore)
            setNewOffer(userNewOfferFromStore)
            setNewMessage(userNewMessageFromStore)
            setNewProfileView(userNewProfileViewFromStore)
            setLoginAtteptOnAccount(userLoginAtteptOnAccountFromStore)
            setTransaction(userTransactionFromStore)
        }
    }, [userNotification]);

    useEffect(() => {
        runInAction(() => {
            set(userNotification, "userNewReview", isNewReview)
            set(userNotification, "userNewOffer", isNewOffer)
            set(userNotification, "userNewMessage", isNewMessage)
            set(userNotification, "userNewProfileView", isNewProfileView)
            set(userNotification, "userLoginAtteptOnAccount", isLoginAtteptOnAccount)
            set(userNotification, "userTransaction", isTransaction)
        })
    }, [isNewReview, isNewOffer, isNewMessage, isNewProfileView, isLoginAtteptOnAccount, isTransaction]);


    return (
        <Animated.View style={{
            zIndex: 1000,
            height: windowHeight,
            // width: windowWidth,
            width,
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
                <AccountsTabHeader tabName={'Notification Settings'} setOpenTabs={setOpenTabs} onPress={onPress} />
                {/* Form */}
                {/* New Review */}
                <NotificationRow
                >
                    <NotificationRowText>New Review</NotificationRowText>

                    <SwitchToggle
                        switchOn={isNewReview}
                        onPress={() => setNewReview(!isNewReview)}
                        circleColorOff={'white'}
                        backgroundColorOff={'#E9E9EA'}
                        containerStyle={{
                            width: 51,
                            height: 31,
                            borderRadius: 26,
                            padding: 2,
                        }}
                        circleStyle={{
                            width: 27,
                            height: 27,
                            borderRadius: 20,
                        }}
                    />
                </NotificationRow>

                {/* New Offer */}
                <NotificationRow
                >
                    <NotificationRowText>New Offer</NotificationRowText>

                    <SwitchToggle
                        switchOn={isNewOffer}
                        onPress={() => setNewOffer(!isNewOffer)}
                        circleColorOff={'white'}
                        backgroundColorOff={'#E9E9EA'}
                        containerStyle={{
                            width: 51,
                            height: 31,
                            borderRadius: 26,
                            padding: 2,
                        }}
                        circleStyle={{
                            width: 27,
                            height: 27,
                            borderRadius: 20,
                        }}
                    />
                </NotificationRow>

                {/* New Messages */}
                <NotificationRow
                >
                    <NotificationRowText>New Message</NotificationRowText>

                    <SwitchToggle
                        switchOn={isNewMessage}
                        onPress={() => setNewMessage(!isNewMessage)}
                        circleColorOff={'white'}
                        backgroundColorOff={'#E9E9EA'}
                        containerStyle={{
                            width: 51,
                            height: 31,
                            borderRadius: 26,
                            padding: 2,
                        }}
                        circleStyle={{
                            width: 27,
                            height: 27,
                            borderRadius: 20,
                        }}
                    />
                </NotificationRow>

                {/* New Profile View */}
                <NotificationRow
                >
                    <NotificationRowText>New Profile View</NotificationRowText>

                    <SwitchToggle
                        switchOn={isNewProfileView}
                        onPress={() => setNewProfileView(!isNewProfileView)}
                        circleColorOff={'white'}
                        backgroundColorOff={'#E9E9EA'}
                        containerStyle={{
                            width: 51,
                            height: 31,
                            borderRadius: 26,
                            padding: 2,
                        }}
                        circleStyle={{
                            width: 27,
                            height: 27,
                            borderRadius: 20,
                        }}
                    />
                </NotificationRow>

                {/* Login Attempt on Account */}
                <NotificationRow
                >
                    <NotificationRowText>Login Attempt on Account</NotificationRowText>

                    <SwitchToggle
                        switchOn={isLoginAtteptOnAccount}
                        onPress={() => setLoginAtteptOnAccount(!isLoginAtteptOnAccount)}
                        circleColorOff={'white'}
                        backgroundColorOff={'#E9E9EA'}
                        containerStyle={{
                            width: 51,
                            height: 31,
                            borderRadius: 26,
                            padding: 2,
                        }}
                        circleStyle={{
                            width: 27,
                            height: 27,
                            borderRadius: 20,
                        }}
                    />
                </NotificationRow>

                {/* Transactions */}
                <NotificationRow
                >
                    <NotificationRowText>Transactions</NotificationRowText>

                    <SwitchToggle
                        switchOn={isTransaction}
                        onPress={() => setTransaction(!isTransaction)}
                        circleColorOff={'white'}
                        backgroundColorOff={'#E9E9EA'}
                        containerStyle={{
                            width: 51,
                            height: 31,
                            borderRadius: 26,
                            padding: 2,
                        }}
                        circleStyle={{
                            width: 27,
                            height: 27,
                            borderRadius: 20,
                        }}
                    />
                </NotificationRow>


            </FilterContainer>

        </Animated.View >
    )
})

export default NotificationTab;

