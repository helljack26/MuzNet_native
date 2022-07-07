import React from 'react';
import { useState, useEffect } from 'react';

import { View, KeyboardAvoidingView, BackHandler } from 'react-native';
import { useForm, Controller } from "react-hook-form";
// Components
// import AccountsTabHeader from '../AccountsTabHeader'
import YesReviewTab from './YesReviewTab'
import PayoutMethods from './PayoutMethods'

// Helpers
import { getWindowDimension } from '@/components/helpers/getWindowDimension'
// Images
import IMAGES from '@/res/images'
const {
    MapPointIcon,
    EditBlackIcon
} = IMAGES;
// Variables
import { S } from '@/res/strings'
// Styles
import { style } from './style'
const {
    FilterContainer,
    FeedbackTitle,
    FeedbackSubTitle,
    ButtonsRow,
    AddPayment,
    AddPaymentRowText,
    SecurePaymentMessage,
    SecurePaymentMessageText,
    SecurePaymentMessageReadMoreText,
} = style;
// Mixins
import { M } from '@/res/mixin'
const {
    BlackBtn,
    BlackBtnText,
} = M;
// Store
import { observer } from 'mobx-react-lite';


const LeaveFeedbackScreen = observer(() => {
    const { windowHeight, windowWidth } = getWindowDimension()

    // Payments state
    const [isOpenYesReview, setOpenYes] = useState(false);
    const [isCloseYesReview, setClosePayments] = useState(false);

    // Payouts state
    const [isOpenPayouts, setOpenPayouts] = useState(false);

    // Handler for native back button
    const tabNameToClose = 'Payments and Payouts'
    const [isHideAnimationTab, setHideAnimationTab] = useState(false);

    // useEffect(() => {
    //     const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
    //         if (!isOpenYesReview && !isOpenPayouts) {
    //             setHideAnimationTab(true)
    //             setTimeout(() => {
    //                 setOpenTabs({
    //                     tabName: tabNameToClose,
    //                     isOpen: false
    //                 })
    //             }, 400);
    //         }
    //         // If back on payment tab
    //         if (isOpenYesReview && !isOpenPaymentDetails) {
    //             setClosePayments(true)
    //             setTimeout(() => {
    //                 setOpenYes(false)
    //                 setClosePayments(false)
    //             }, 400);
    //         }
    //         // If back on payment tab
    //         if (isOpenPayouts) {
    //             return false
    //         }
    //         if (isOpenYesReview && isOpenPaymentDetails) {
    //             setClosePaymentDetails(true)
    //         }

    //         return true
    //     })
    //     return () => {
    //         backHandler.remove()
    //     }
    // }, [isOpenYesReview, isOpenPaymentDetails, isOpenPayouts])


    return (
        <View
            style={{
                height: windowHeight,
                width: windowWidth,
            }}
        >
            <FilterContainer
                style={{
                    height: windowHeight,
                    width: windowWidth,
                }}
            >
                {/* Header */}
                <FeedbackTitle>
                    Leave feedback
                </FeedbackTitle>
                <FeedbackSubTitle>
                    Did your performance take place?
                </FeedbackSubTitle>
                {/* Yes or no */}
                <ButtonsRow>
                    <BlackBtn
                        style={{ height: 56, width: '48.5%', }}
                        onPress={() => { setOpenYes(true) }}
                    >
                        <BlackBtnText>Yes</BlackBtnText>
                    </BlackBtn>

                    <AddPayment
                        onPress={() => {

                        }}
                    >
                        <AddPaymentRowText>
                            No
                        </AddPaymentRowText>
                    </AddPayment>
                </ButtonsRow>

                <SecurePaymentMessage>
                    <SecurePaymentMessageText>
                        Have a problem with perfomance? <SecurePaymentMessageReadMoreText>Contact us</SecurePaymentMessageReadMoreText>
                    </SecurePaymentMessageText>
                </SecurePaymentMessage>

            </FilterContainer >
            {/* If press yes */}
            {isOpenYesReview && <YesReviewTab
                isOpen={isOpenYesReview}
                isClose={isCloseYesReview}
                setOpen={setOpenYes}
            />}

            {/* Contact us link */}
            {/* {isOpenPayouts && <PayoutMethods
                isOpen={isOpenPayouts}
                setOpen={setOpenPayouts}
            />} */}
        </View>

    )
})

export default LeaveFeedbackScreen;

