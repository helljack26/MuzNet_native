import React from 'react';
import { useState, useEffect } from 'react';
import { Animated, BackHandler, Keyboard } from 'react-native';
// Components
import CameraCustom from '@/components/CameraCustom'
// Helpers
import { getWindowDimension } from '@/components/helpers/getWindowDimension'
import { useAnimateAttachment } from './useAnimateAttachment';
// Images
import IMAGES from '@/res/images'
const {
    CrossBlackIcon,
} = IMAGES;
// Variables
import C from '@/res/colors'
// Styles
import { style } from './style'
const {
    AttachContainer,
    CloseButton,
    OpacityBg,
    ButtonsBlock,
    Button,
    ButtonText,
    ButtonCancelText,
    AttachContainerText,
} = style;

const BlockUserPopup = ({ isOpenBottomPopup, setOpenBottomPopup, setConfirm }) => {
    const { windowHeight, windowWidth } = getWindowDimension()

    // Animate attachment
    const { onPress, height } = useAnimateAttachment()
    const [isShowOpacityBgMargin, setShowOpacityBgMargin] = useState(false);

    useEffect(() => {
        if (isOpenBottomPopup === true) {
            Keyboard.dismiss()
            onPress(true)
            setShowOpacityBgMargin(true)
        }

    }, [isOpenBottomPopup]);

    return (
        <Animated.View style={{
            width: windowWidth,
            height,
            zIndex: 3000,
            justifyContent: 'center',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
            position: "absolute",
            marginTop: -50,
            left: 0,
            bottom: 0,
            right: 0,
        }} >
            {/* Opacity bg */}
            <OpacityBg
                style={{
                    height: windowHeight,
                    width: windowWidth,
                    top: isShowOpacityBgMargin ? -50 : 0,
                }}
                onPress={() => {
                    onPress(false)
                    setOpenBottomPopup(false)
                    setConfirm(false)
                    setShowOpacityBgMargin(false)
                }}
            >
            </OpacityBg>

            {/* Attach container */}
            <AttachContainer>
                {/* Buttons */}
                <ButtonsBlock>

                    <Button
                        onPress={() => {
                            setConfirm(true)
                            onPress(false)
                            setOpenBottomPopup(false)
                            setShowOpacityBgMargin(false)
                        }}
                    >
                        <ButtonText>Block User</ButtonText>
                    </Button>

                    <Button
                        onPress={() => {
                            onPress(false)
                            setOpenBottomPopup(false)
                            setConfirm(false)
                            setShowOpacityBgMargin(false)
                        }}
                    >
                        <ButtonCancelText>Cancel</ButtonCancelText>
                    </Button>
                </ButtonsBlock>
            </AttachContainer>


        </Animated.View >
    )
}

export default BlockUserPopup;
