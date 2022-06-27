import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity, Platform, Animated, Keyboard, Easing, Pressable } from 'react-native';
// Camera
import { Camera } from 'expo-camera';
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

// Components
import CameraCustom from '@/components/CameraCustom'

// Helpers
import { getWindowDimension } from '@/components/helpers/getWindowDimension'
import { useAnimateAttachment } from './useAnimateAttachment';
import { isKeyboardShown } from '@/components/helpers/isKeyboardShown'

// Images
import IMAGES from '@/res/images'
const {
    CameraGrayIcon,
    GaleryIcon,
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
import { useCameraStore } from '@/stores/CameraStore';

const ChatAttachment = observer(() => {
    const route = useRoute();
    const { windowHeight, windowWidth } = getWindowDimension()
    // Store
    const { isOpenChatAttachment, setOpenChatAttachment } = useChatAttachmentStore();
    // Camera store
    const {
        hasPermission,
        cameraType,
        getPermissionAsync,
        handleCameraType,
        takePicture,
        pickImage
    } = useCameraStore();

    const [isOpenCamera, setOpenCamera] = useState(false);
    useEffect(() => {
        if (hasPermission === true) {
            setOpenCamera(true)
        } else {
            setOpenCamera(false)
        }
    }, [hasPermission]);
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

    const [isCameraRoll, setCameraRollTab] = useState(true);

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

            {/* Camera */}
            {isOpenCamera === true && <CameraCustom setOpenCamera={setOpenCamera} />}

            {/* Attach container */}
            <AttachContainer>
                {/* Header */}
                <Header isCameraRoll={isCameraRoll}>
                    {/* Switch buttons */}
                    <ButtonsBlock>
                        <Button
                            onPress={() => { setCameraRollTab(true) }}
                            isActive={isCameraRoll}
                        >
                            <ButtonText isActive={isCameraRoll}>Photo or Video</ButtonText>
                        </Button>

                        <Button
                            onPress={() => { setCameraRollTab(false) }}
                            isActive={!isCameraRoll}
                        >
                            <ButtonText isActive={!isCameraRoll}>File</ButtonText>
                        </Button>
                    </ButtonsBlock>

                </Header>

                {isCameraRoll === true ?
                    <AttachCameraRollBlock
                        style={{
                            width: windowWidth,
                        }}
                    >
                        <AttachCameraOpenBtn
                            onPress={() => {
                                if (hasPermission) {
                                    setOpenCamera(true)
                                }
                                getPermissionAsync()
                            }}
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