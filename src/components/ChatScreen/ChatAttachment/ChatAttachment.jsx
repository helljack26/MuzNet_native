import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Animated, Keyboard, Easing, Pressable, StyleSheet, Platform } from 'react-native';
import { useForm, Controller } from "react-hook-form";
// Components
import DropSelectCalendar from '@/components/Dropdowns/DropSelectCalendar'
import TimePeriodPicker from '@/components/TimePeriodPicker'
import SearchLocationDropSelect from '@/components/Dropdowns/SearchLocationDropSelect'
import DropFlagSelect from '@/pages/SignUp/SignUpScreen/DropFlagSelect'

// Helpers
import MaskInput from 'react-native-mask-input';
import { getWindowDimension } from '@/components/helpers/getWindowDimension'
import { useAnimateAttachment } from './useAnimateAttachment';
import { isKeyboardShown } from '@/components/helpers/isKeyboardShown'
import { addDotForNumber } from '@/components/helpers/addDotForNumber'
// Images
import IMAGES from '@/res/images'
const {
    CameraGrayIcon,
    LockGrayIcon,
} = IMAGES;
// Variables
import C from '@/res/colors'
import F from '@/res/fonts'
import { S } from '@/res/strings'
// Styles
import { style } from './style'
const {
    AttachContainer,
    Header,
    AttachCameraRollBlock,
    AttachFileBlock,
    ButtonsBlock,
    Button,
    ButtonText,
    AttachCameraOpenBtn,
    AttachCameraOpenBtnText,
} = style;

// Store
import { observer } from 'mobx-react-lite';
import { useChatAttachmentStore } from '@/stores/ChatAttachmentStore';

const ChatAttachment = observer(() => {
    const route = useRoute();
    const { windowHeight, windowWidth } = getWindowDimension()
    // Store
    const { isOpenChatAttachment, setOpenChatAttachment } = useChatAttachmentStore();
    // Animate attachment
    const { onPress, height } = useAnimateAttachment()

    const [isShowOpacityBg, setShowOpacityBg] = useState(true);
    const [isShowOpacityBgMargin, setShowOpacityBgMargin] = useState(true);

    useEffect(() => {
        if (isOpenChatAttachment === true) {
            onPress(true)
            setShowOpacityBg(true)
            setTimeout(() => {
                setShowOpacityBgMargin(true)
            }, 400);
        }
        // if (isOpenChatAttachment === false) {
        //     setShowOpacityBg(false)
        //     setShowOpacityBgMargin(false)
        // }
    }, [isOpenChatAttachment]);

    const isKeyboardOpen = isKeyboardShown()

    const [isCameraRoll, setCameraRoll] = useState(true);

    const cameraRollItemWidth = windowWidth / 4

    return (
        <Animated.View style={[styles.container, { width: windowWidth }]} >
            {/* Opacity bg */}
            {isShowOpacityBg && <Pressable
                style={{
                    height: windowHeight,
                    width: windowWidth,
                    position: "absolute",
                    backgroundColor: C.black,
                    opacity: 0.5,
                    top: isShowOpacityBgMargin ? -50 : 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                }}
                onPress={() => {
                    onPress(false)
                    setOpenChatAttachment(false)
                }}
            >
            </Pressable>}

            {/* Attach container */}
            <AttachContainer>

                {/* Header */}
                <Header isCameraRoll={isCameraRoll}>
                    {/* Switch buttons */}
                    <ButtonsBlock>
                        <Button
                            onPress={() => { setCameraRoll(true) }}
                            isActive={isCameraRoll}
                        >
                            <ButtonText isActive={isCameraRoll}>Photo or Video</ButtonText>
                        </Button>

                        <Button
                            onPress={() => { setCameraRoll(false) }}
                            isActive={!isCameraRoll}
                        >
                            <ButtonText isActive={!isCameraRoll}>File</ButtonText>
                        </Button>
                    </ButtonsBlock>

                </Header>

                {isCameraRoll === true ?
                    <AttachCameraRollBlock
                        onPress={() => {

                        }}
                        style={{
                            width: windowWidth,
                        }}
                    >
                        <AttachCameraOpenBtn
                            style={{
                                width: cameraRollItemWidth - 1,
                                height: cameraRollItemWidth,
                                marginHorizontal: 0.5,
                                marginBottom: 1,
                            }}
                        >
                            <CameraGrayIcon width={29} height={23} />
                            <AttachCameraOpenBtnText>Camera</AttachCameraOpenBtnText>
                        </AttachCameraOpenBtn>

                    </AttachCameraRollBlock>
                    :
                    <AttachFileBlock>

                    </AttachFileBlock>
                }
            </AttachContainer>


        </Animated.View >
    )
})

export default ChatAttachment;

const styles = StyleSheet.create({
    container: {
        zIndex: 1000,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'flex-end',
        position: "absolute",
        marginTop: -50,
        left: 0,
        bottom: 0,
        right: 0,
    },
})