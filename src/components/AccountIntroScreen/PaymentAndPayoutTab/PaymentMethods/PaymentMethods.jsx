import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Animated, Keyboard, View, Pressable, KeyboardAvoidingView, Platform } from 'react-native';
import { useForm, Controller } from "react-hook-form";
// Components
import ChoosePaymentMethod from '@/components/ChoosePaymentMethod'
import AccountAddPaymentDetails from './AccountAddPaymentDetails'

// Helpers
import { getWindowDimension } from '@/components/helpers/getWindowDimension'
import { useAnimateOfferPreview } from './useAnimateOfferPreview';
import { isKeyboardShown } from '@/components/helpers/isKeyboardShown'
import { addDotForNumber } from '@/components/helpers/addDotForNumber'
// Images
import IMAGES from '@/res/images'
const {
    GoBackIcon,
    LockGrayIcon,
} = IMAGES;
// Variables
import C from '@/res/colors'
import F from '@/res/fonts'
import { S } from '@/res/strings'
// Styles
import { style } from './style'
const {
    FilterContainer,
    Header,
    HeaderClose,
    HeaderTitle,
    FilterBlock,

    OfferDetails,
    OfferDetailsTitle,
    OfferDetailsBlock,
    OfferLi,
    OfferLiKeys,
    OfferLiValue,
    OfferPayment,

    ContentBlock,
    ContentBlockRow,
    ContainerLink,
    ContainerPrice,
    ContainerHour,
    ButtonSubmit,
    ButtonSubmitText,
    SecurePaymentMessage,
    SecurePaymentMessageText,
    SecurePaymentMessageReadMoreText,
} = style;

// Store
import { observer } from 'mobx-react-lite';
import { useOfferToMusicianApiStore } from '@/stores/OfferToMusicianApi';

const PaymentMethods = observer(({ isPayments, isOpen, isClose, setOpen }) => {

    const isKeyboardOpen = isKeyboardShown()

    const { windowHeight, windowWidth } = getWindowDimension()

    const { onPress, width } = useAnimateOfferPreview()

    useEffect(() => {
        if (isOpen === true) { onPress(true) }
    }, [isOpen]);
    // Close tab
    const closeTab = () => {
        onPress(false)
        setTimeout(() => {
            setOpen(false)
        }, 600);
    }

    useEffect(() => {
        if (isClose === true) { closeTab() }
    }, [isClose]);

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
                <Header >
                    <HeaderClose
                        onPress={() => {
                            closeTab()
                        }}
                    >
                        <GoBackIcon width={12} height={21} />
                    </HeaderClose>

                    <HeaderTitle>
                        Add a Payment Method
                    </HeaderTitle>
                </Header>
                {/* Secure message */}
                <FilterBlock keyboardShouldPersistTaps={'handled'}>


                    {/* Сhoose payment method */}
                    <OfferPayment>
                        <OfferDetailsTitle>
                            Use a payment method to make purchases on MuzNet
                        </OfferDetailsTitle>

                        <ChoosePaymentMethod isAccountScreen={true} />
                    </OfferPayment>

                    {/* Empty block if open keyboard */}
                    <View
                        style={{
                            marginBottom: isKeyboardOpen === true ? 200 : 0,
                        }}
                    >
                    </View>
                </FilterBlock>

            </FilterContainer>


            {/* Payment details  */}
            <AccountAddPaymentDetails />

        </Animated.View >
    )
})

export default PaymentMethods;

