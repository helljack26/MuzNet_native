import React from 'react';
import { useState, useEffect } from 'react';
import { Animated, Keyboard } from 'react-native';
import { useForm, Controller } from "react-hook-form";

// Helpers
import MaskInput from 'react-native-mask-input';
import { getWindowDimension } from '@/components/helpers/getWindowDimension'
import { useAnimateCreateOffer } from './useAnimateCreateOffer';
import { isKeyboardShown } from '@/components/helpers/isKeyboardShown'
// Images
import IMAGES from '@/res/images'
const {
    GoBackIcon,
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
    ContentBlock,
} = style;
// Mixins
import { M } from '@/res/mixin'
const {
    BlackBtn,
    BlackBtnText,
} = M;

const ConfirmAndPay = ({ isOpenTab, setOpenTab, onSubmitPromoteAd, isCloseTab }) => {
    const isKeyboardOpen = isKeyboardShown()

    const { windowHeight, windowWidth } = getWindowDimension()
    const { onPress, width } = useAnimateCreateOffer()
    useEffect(() => {
        if (isOpenTab === true) {
            onPress(true)
        }
    }, [isOpenTab]);
    // Close tab
    const closeTab = () => {
        onPress(false)
        setTimeout(() => {
            setOpenTab(false)
        }, 600);
    }
    useEffect(() => {
        if (isCloseTab === true) {
            closeTab()
        }
    }, [isCloseTab]);

    return (
        <Animated.View style={{
            zIndex: 1100,
            height: windowHeight,
            // width: windowWidth,
            width,
            backgroundColor: 'white',
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
                        Confirm and pay
                    </HeaderTitle>
                </Header>

                <FilterBlock>

                </FilterBlock>
                {/* Footer block */}
                <ContentBlock
                    style={{
                        width: windowWidth,
                    }}>

                    <BlackBtn
                    // onPress={handleSubmit(onSubmit)}
                    >
                        <BlackBtnText>
                            Pay with
                        </BlackBtnText>
                    </BlackBtn>

                </ContentBlock>
            </FilterContainer>
        </Animated.View >
    )
}

export default ConfirmAndPay;

