import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity, Platform, Animated, Keyboard, Easing, Pressable } from 'react-native';
// Camera
import { Camera } from 'expo-camera';
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

// Components

// Helpers
import { getWindowDimension } from '@/components/helpers/getWindowDimension'
import { isKeyboardShown } from '@/components/helpers/isKeyboardShown'

// Images
import IMAGES from '@/res/images'
const {
    CrossWhiteIcon,
    ChangeCameraTypeIcon,
    GaleryWhiteIcon,
} = IMAGES;
// Variables
import C from '@/res/colors'
import F from '@/res/fonts'
import { S } from '@/res/strings'
// Styles
import { style } from './style'
const {
    CameraContainer,
    CameraButtons,
    CloseButton,
    SecondaryButton,
    TakePictureButton,
    TakePictureButtonRound,
    SendPhoto,
    SendPhotoText,
} = style;

// Store
import { observer } from 'mobx-react-lite';
import { useChatAttachmentStore } from '@/stores/ChatAttachmentStore';
import { useCameraStore } from '@/stores/CameraStore';
const CameraCustom = observer(({ setOpenCamera }) => {
    const route = useRoute();
    const { windowHeight, windowWidth } = getWindowDimension()

    const cameraRef = useRef();
    // Store
    const { setCameraImage } = useChatAttachmentStore()
    // Camera store
    const {
        currentImage,
        hasPermission,
        cameraType,
        isPreview,
        getPermissionAsync,
        currentImageFromGalery,
        cancelPreview,
        handleCameraType,
        takePicture,
        pickImage
    } = useCameraStore();


    useEffect(() => {
        if (currentImageFromGalery !== undefined) {
            console.log('кайфуша');
            setCameraImage(currentImageFromGalery)
        }
    }, [currentImageFromGalery]);
    return (
        <CameraContainer
            style={{
                height: windowHeight + 50,
                width: windowWidth
            }}
        >
            <CameraButtons>
                {/* Gallery button */}
                <CloseButton
                    onPress={() => {

                        if (!isPreview) {
                            setOpenCamera(false)
                        } else {
                            cancelPreview(cameraRef)
                        }
                    }

                    }>
                    <CrossWhiteIcon width={14} height={14} />
                </CloseButton>
            </CameraButtons>
            <Camera
                ref={cameraRef}
                type={cameraType}
                style={{
                    width: windowWidth,
                    height: windowWidth + windowWidth / 3
                }}
            >
            </Camera>

            {/* Camera control */}
            {!isPreview && <CameraButtons>
                {/* Gallery button */}
                <SecondaryButton onPress={() => pickImage()}>
                    <GaleryWhiteIcon width={18} height={18} />
                </SecondaryButton>

                {/* Take picture */}
                <TakePictureButton onPress={() => takePicture(cameraRef)}>
                    <TakePictureButtonRound></TakePictureButtonRound>
                </TakePictureButton>

                {/* Change camera type */}
                <SecondaryButton onPress={() => handleCameraType()}>
                    <ChangeCameraTypeIcon width={20} height={20} />
                </SecondaryButton>
            </CameraButtons>}

            {/* Preview control */}
            {isPreview && <CameraButtons>

                <SendPhoto
                    onPress={() => {
                        setCameraImage(currentImage)
                        cancelPreview(cameraRef)
                        setOpenCamera(false)
                    }}
                >
                    <SendPhotoText>
                        Send photo
                    </SendPhotoText>
                </SendPhoto>

            </CameraButtons>
            }
        </CameraContainer>
    )
})

export default CameraCustom;
