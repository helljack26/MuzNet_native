import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Animated, Keyboard, View, Pressable, KeyboardAvoidingView, Platform } from 'react-native';
import { useForm, Controller } from "react-hook-form";
// Components
import ChoosePaymentMethod from '@/components/ChoosePaymentMethod'

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
    HeaderRow,
    HeaderWhiteBlock,
    HeaderClose,
    HeaderUserName,
    HeaderUserLastLogin,
    HeaderUser,
    HeaderUserImgBlock,
    HeaderUserImg,
    HeaderOptions,
    HeaderOptionsDots,

    SharedTitle,
    SharedBlock,
    SharedContainer,
    SharedScrollView,
    SharedImageBlock,
    SharedImage,
} = style;

// Store
import { observer } from 'mobx-react-lite';

const ChatSharedFiles = observer(({ chatUserName, chatUserImg, isOpenSharedScreen, setOpenSharedScreen, setOpenBlockUserPopup }) => {

    const { windowHeight, windowWidth } = getWindowDimension()
    const { onPress, width } = useAnimateOfferPreview()

    useEffect(() => {
        if (isOpenSharedScreen === true) {
            onPress(true)
        }
    }, [isOpenSharedScreen]);

    const imageBlockSize = (windowWidth - 53) / 4

    return (
        <Animated.View style={{
            zIndex: 2000,
            height: windowHeight,
            width,
            // width: windowWidth,
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
                <Header>
                    <HeaderWhiteBlock></HeaderWhiteBlock>
                    <HeaderRow>
                        <HeaderClose
                            onPress={() => {
                                setOpenSharedScreen(false)
                                onPress(false)
                            }}
                        >
                            <GoBackIcon width={14} height={22} />
                        </HeaderClose>

                        <HeaderUser>
                            <HeaderUserImgBlock>
                                <HeaderUserImg source={chatUserImg} resizeMode={'cover'} />
                            </HeaderUserImgBlock>
                            <HeaderUserName>
                                {chatUserName}
                            </HeaderUserName>
                            <HeaderUserLastLogin>
                                Active 19m ago
                            </HeaderUserLastLogin>
                        </HeaderUser>

                        <HeaderOptions
                            onPress={() => {
                                setOpenBlockUserPopup(true)
                            }}
                        >
                            <HeaderOptionsDots></HeaderOptionsDots>
                            <HeaderOptionsDots></HeaderOptionsDots>
                            <HeaderOptionsDots></HeaderOptionsDots>
                        </HeaderOptions>
                    </HeaderRow>
                </Header>

                <SharedContainer>
                    <SharedTitle>
                        Shared files
                    </SharedTitle>
                    <SharedScrollView
                        showsVerticalScrollIndicator={false}
                    >
                        <SharedBlock>
                            {IMAGES.sharedImages.map((image, id) => {

                                return <SharedImageBlock

                                    style={{
                                        height: imageBlockSize,
                                        width: imageBlockSize,
                                    }}
                                    key={id}
                                >
                                    <SharedImage source={image} resizeMode={'cover'} />
                                </SharedImageBlock>

                            })}
                        </SharedBlock>
                    </SharedScrollView>
                </SharedContainer>
            </FilterContainer>

        </Animated.View >
    )
})

export default ChatSharedFiles;

