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
import { M } from '@/res/mixin'
import styled from 'styled-components/native';

const FilterContainer = styled.ScrollView`
width: 100%;
background-color: ${C.white};
padding-top: 68px;
padding-bottom: 200px;

display: flex;
flex-direction: column;
`;
const FilterContainerBlock = styled.View`
width: 100%;
overflow: hidden;
`;
const TermsText = styled(M.MediumText17)`
padding: 0px 16px;
padding-bottom: 31px;
color: ${C.cyanGray};
`;

// Store
import { observer } from 'mobx-react-lite';
import { runInAction, set } from 'mobx';

import { useAccountApiStore } from '@/stores/AccountApi';

const TermsOfServiceTab = observer(({ isOpenTab }) => {

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
    const tabNameToClose = 'Terms of Service'
    backHandler(onPress, setOpenTabs, tabNameToClose);

    return (
        <Animated.View
            style={{
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
            <FilterContainerBlock
                style={{
                    height: windowHeight,
                    width: windowWidth,

                }}
            >
                <FilterContainer
                    showsVerticalScrollIndicator={false}
                >


                    {/* Header */}
                    <AccountsTabHeader tabName={'Terms of Service'} setOpenTabs={setOpenTabs} onPress={onPress} />

                    <TermsText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </TermsText>

                    <TermsText
                        style={{
                            paddingBottom: 150,

                        }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </TermsText>


                </FilterContainer>
            </FilterContainerBlock>

        </Animated.View >
    )
})

export default TermsOfServiceTab;

