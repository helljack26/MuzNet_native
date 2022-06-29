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
    ClosePanBlock,
    ClosePan,
    CloseButton,
    OpacityBg,
    ButtonsBlock,
    Button,
    ButtonText,
    ButtonCancel,
    ButtonCancelText,
    AttachContainerText,
} = style;

const BottomConfirmPopup = ({ isOpenBottomPopup, setOpenBottomPopup, setConfirm, confirmBtnText, popupMainText }) => {
    const { windowHeight, windowWidth } = getWindowDimension()

    // Animate attachment
    const { onPress, height } = useAnimateAttachment()
    const [isShowOpacityBgMargin, setShowOpacityBgMargin] = useState(false);

    useEffect(() => {
        if (isOpenBottomPopup === true) {
            Keyboard.dismiss()

            onPress(true)
            setTimeout(() => {
                setShowOpacityBgMargin(true)
            }, 400);
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
                <CloseButton
                    onPress={() => {
                        onPress(false)
                        setOpenBottomPopup(false)
                        setConfirm(false)
                        setShowOpacityBgMargin(false)
                    }}  >
                    <CrossBlackIcon width={14} height={14} />
                </CloseButton>

                <AttachContainerText>
                    {popupMainText}
                </AttachContainerText>

                {/* Buttons */}
                <ButtonsBlock>
                    <ButtonCancel
                        onPress={() => {
                            onPress(false)
                            setOpenBottomPopup(false)
                            setConfirm(false)
                            setShowOpacityBgMargin(false)
                        }}
                    >
                        <ButtonCancelText>Cancel</ButtonCancelText>
                    </ButtonCancel>
                    <Button
                        onPress={() => {
                            setConfirm(true)
                            onPress(false)
                            setOpenBottomPopup(false)
                            setShowOpacityBgMargin(false)
                        }}
                    >
                        <ButtonText>{confirmBtnText}</ButtonText>
                    </Button>

                </ButtonsBlock>
            </AttachContainer>


        </Animated.View >
    )
}

export default BottomConfirmPopup;
