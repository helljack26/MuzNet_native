import React from 'react';
import { useState, useEffect } from 'react';

import { Animated, KeyboardAvoidingView, Platform } from 'react-native';
import { useForm, Controller } from "react-hook-form";
// Components
import AccountsTabHeader from '../AccountsTabHeader'
import AdsItem from './AdsItem'
// Helpers
import { getWindowDimension } from '@/components/helpers/getWindowDimension'
import { useAnimateOfferPreview } from './useAnimateOfferPreview';
import { isKeyboardShown } from '@/components/helpers/isKeyboardShown'
import { backHandler } from '../backHandler'
// Images
import IMAGES from '@/res/images'
const {
    AddCrossIcon
} = IMAGES;
// Variables
import C from '@/res/colors'
import F from '@/res/fonts'
import { S } from '@/res/strings'
import { M } from '@/res/mixin'

// Styles
import styled from 'styled-components/native';
const FilterContainer = styled.View`
width: 100%;
background-color: ${C.white};
padding-top: 68px;
overflow: hidden;
`;
const AdsListContainer = styled.ScrollView`
width: 100%;
/* margin-top: 16px; */
padding: 0px 16px;
`;
const Border = styled.View`
width: 100%;
background-color: ${C.lightGray};
margin-top: 8px;
margin-bottom: 16px;
height: 1px;
border-radius: 1px;
`;
const AddPayment = styled.TouchableOpacity`
width: 100%;
height: 56px;
margin-bottom: 16px;
border-radius: 12px;
padding: 0px 20px;
display: flex;
align-items: center;
flex-direction: row;
border-color: ${C.lightGray};
border-width: 1px;
border-style: solid;
`;
const AddPaymentRowText = styled(M.MediumText15)`
margin-left: 12px;
`;
// Store
import { observer } from 'mobx-react-lite';
import { runInAction, set } from 'mobx';

import { useAccountApiStore } from '@/stores/AccountApi';

const MyAdsTab = observer(({ isOpenTab }) => {
    const isKeyboardOpen = isKeyboardShown()

    const { windowHeight, windowWidth } = getWindowDimension()

    // Store
    const { setOpenTabs, contractorAccountDataApi } = useAccountApiStore();

    const adsList = contractorAccountDataApi[0].contractorAds !== undefined ? contractorAccountDataApi[0].contractorAds : []
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
                <AdsListContainer>
                    {adsList.map((item, id) => {
                        return <AdsItem data={item} key={id} />;
                    })}

                    {/* Create new ads */}
                    <Border></Border>
                    <AddPayment
                        onPress={() => {
                            // setOpenPaymentDetails(true) 
                        }}
                    >
                        <AddCrossIcon width={16} height={16} />
                        <AddPaymentRowText>
                            Create New Ad
                        </AddPaymentRowText>
                    </AddPayment>
                </AdsListContainer>

            </FilterContainer>

        </Animated.View >
    )
})

export default MyAdsTab;

