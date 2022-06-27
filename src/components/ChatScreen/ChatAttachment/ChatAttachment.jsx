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
    GaleryBlackIcon,
    CloudBlackIcon,
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
    ClosePanBlock,
    ClosePan,
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
    const navigation = useNavigation();
    const route = useRoute();
    const { windowHeight, windowWidth } = getWindowDimension()
    // Store
    const { isOpenChatAttachment, setOpenChatAttachment, setAttachedFile, isSendAttached, pickImageFromGalery, setCameraImage } = useChatAttachmentStore();

    // Camera store
    const { hasPermission, getPermissionAsync } = useCameraStore();

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

    const [isShowOpacityBgMargin, setShowOpacityBgMargin] = useState(false);

    useEffect(() => {
        if (isOpenChatAttachment === true && isSendAttached === false) {
            onPress(true)
            setTimeout(() => {
                setShowOpacityBgMargin(true)
            }, 400);
        }
        if (isSendAttached === true && isOpenChatAttachment === false) {
            onPress(false)
            setShowOpacityBgMargin(false)
        }
    }, [isOpenChatAttachment, isSendAttached]);

    const isKeyboardOpen = isKeyboardShown()

    return (
        <Animated.View style={{
            width: windowWidth,
            height,
            zIndex: 1000,
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
            <Pressable
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
                    setShowOpacityBgMargin(false)
                }}
            >
            </Pressable>

            {/* Camera */}
            {isOpenCamera === true && <CameraCustom setShowOpacityBgMargin={setShowOpacityBgMargin} setOpenCamera={setOpenCamera} />}

            {/* Attach container */}
            <AttachContainer>
                <ClosePanBlock
                    onPress={() => {
                        onPress(false)
                        setShowOpacityBgMargin(false)
                        setOpenChatAttachment(false)
                    }}

                ><ClosePan></ClosePan></ClosePanBlock>

                {/* Switch buttons */}
                <ButtonsBlock>
                    <Button
                        onPress={() => {
                            if (hasPermission) {
                                setOpenCamera(true)
                            }
                            getPermissionAsync()
                        }}
                    >
                        <CameraGrayIcon width={20} height={18} />
                        <ButtonText>Camera</ButtonText>
                    </Button>

                    <Button
                        onPress={() => { pickImageFromGalery() }}
                    >
                        <GaleryBlackIcon width={18} height={18} />
                        <ButtonText>Gallery</ButtonText>
                    </Button>

                    <Button onPress={() => { setAttachedFile() }}>
                        <CloudBlackIcon width={18} height={18} />

                        <ButtonText>Files</ButtonText>
                    </Button>
                </ButtonsBlock>
            </AttachContainer>


        </Animated.View >
    )
})

export default ChatAttachment;

const styles = StyleSheet.create({
    container: {

    },
})