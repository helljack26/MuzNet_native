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

const MyAdsTab = observer(({ isOpenTab }) => {
    const isKeyboardOpen = isKeyboardShown()

    const { windowHeight, windowWidth } = getWindowDimension()

    // Store
    const { setOpenTabs } = useAccountApiStore();

    // Animation
    const { onPress, width } = useAnimateOfferPreview()
    useEffect(() => {
        if (isOpenTab === true) {
            onPress(true)
        }
    }, [isOpenTab]);
    // Handler for native back button
    const tabNameToClose = 'My Ads'
    backHandler(onPress, setOpenTabs, tabNameToClose);

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
                <AccountsTabHeader tabName={'My Ads'} setOpenTabs={setOpenTabs} onPress={onPress} />
                {/* Form */}

            </FilterContainer>

        </Animated.View >
    )
})

export default MyAdsTab;

