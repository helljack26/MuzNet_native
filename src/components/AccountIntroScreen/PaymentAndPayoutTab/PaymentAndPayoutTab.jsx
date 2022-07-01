import React from 'react';
import { useState, useEffect } from 'react';

import { Animated, KeyboardAvoidingView, Platform } from 'react-native';
import { useForm, Controller } from "react-hook-form";
// Components
import AccountsTabHeader from '../AccountsTabHeader'

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

const PaymentAndPayoutTab = observer(({ isOpenTab }) => {
    // Animation
    const { onPress, width } = useAnimateOfferPreview()

    // Initial show tab 
    useEffect(() => {
        if (isOpenTab === true) {
            onPress(true)
        }
    }, [isOpenTab]);

    // Store
    const { setOpenTabs } = useAccountApiStore();

    // Handler for native back button
    const tabNameToClose = 'Payments and Payouts'
    backHandler(onPress, setOpenTabs, tabNameToClose);

    const isKeyboardOpen = isKeyboardShown()

    const { windowHeight, windowWidth } = getWindowDimension()

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
                <AccountsTabHeader tabName={'Payments and Payouts'} setOpenTabs={setOpenTabs} onPress={onPress} />

                {/* Link list */}
                {/* <AccountLinkList>
                    <AccountLink
                        onPress={() => {

                        }}
                        key={id}>
                        <AccountLinkText>Payment Methods</AccountLinkText>

                        <AccountLinkIcon>
                            <GoBackIcon width={9} height={16} />
                        </AccountLinkIcon>
                    </AccountLink>

                </AccountLinkList> */}


            </FilterContainer>

        </Animated.View >
    )
})

export default PaymentAndPayoutTab;

