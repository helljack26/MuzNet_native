import React from 'react';
import { useState, useEffect } from 'react';
import { Animated, BackHandler, Keyboard } from 'react-native';
// Components

// Helpers
import { getWindowDimension } from '@/components/helpers/getWindowDimension'
import { useAnimateAttachment } from './useAnimateAttachment';
import * as Clipboard from 'expo-clipboard';
// Images
import IMAGES from '@/res/images'
const {
    CrossBlackIcon,
    CopyGrayIcon,
    FacebookIcon,
    GoogleIcon,
    InstagramIcon,
    LinkedinIcon,
    TwitterIcon
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
    AttachContainerTitle,
    AttachContainerText,
    CopyBlock,
    CopyBlockText,
    CopyBlockIcon,
    AttachOrText,
} = style;

const InviteFriendsPopup = ({ isOpenBottomPopup, setOpenBottomPopup }) => {
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

    const [isHideAnimationTab, setHideAnimationTab] = useState(false);

    useEffect(() => {
        if (isHideAnimationTab === true) {
            onPress(false)
        }
    }, [isHideAnimationTab])

    const closePopup = () => {
        setHideAnimationTab(true)
        setShowOpacityBgMargin(false)
        setTimeout(() => {
            setOpenBottomPopup(false)
        }, 600);
    }

    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
            closePopup()
            return true
        })
        return () => {
            backHandler.remove()
        }
    }, [])

    // Cipboard
    const [isCopied, setCopied] = useState(false);

    const copyToClipboard = () => {
        setCopied(true)
        Clipboard.setString('https://muznet.com/app/YfdvcE');
    };
    // Show message that link copied
    useEffect(() => {
        if (isCopied === true) {
            setTimeout(() => {
                setCopied(false)
            }, 2000);
        }
    }, [isCopied]);

    const socialButtomWidth = (windowWidth - 67) / 5
    return (
        <>
            {/* Opacity bg */}
            {isOpenBottomPopup &&
                <OpacityBg
                    style={{
                        height: windowHeight,
                        width: windowWidth,
                        top: isShowOpacityBgMargin ? -50 : 0,
                    }}
                    onPress={() => {
                        closePopup()
                    }}
                >
                </OpacityBg>}

            <Animated.View style={{
                width: windowWidth,
                // height: windowHeight,
                height,
                zIndex: 2000,
                justifyContent: 'center',
                justifyContent: 'flex-end',
                position: "absolute",
                flex: 1,
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: C.white,
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
                overflow: 'hidden',
                paddingHorizontal: 16,
                left: 0,
                bottom: 0,
                right: 0,
            }} >
                {/* Attach container */}
                <CloseButton
                    onPress={() => {
                        closePopup()
                    }}  >
                    <CrossBlackIcon width={16} height={16} />
                </CloseButton>

                <AttachContainerTitle>
                    Invite your friend to the app!
                </AttachContainerTitle>
                <AttachContainerText>
                    Copy this link to share this app with your friends
                </AttachContainerText>

                <CopyBlock onPress={copyToClipboard}>
                    {!isCopied && <CopyBlockText>
                        https://muznet.com/app/YfdvcE
                    </CopyBlockText>}

                    {isCopied === true && <CopyBlockText>
                        Link copied to clipboard
                    </CopyBlockText>}
                    <CopyBlockIcon>
                        <CopyGrayIcon width={18} height={18} />
                    </CopyBlockIcon>
                </CopyBlock>
                <AttachOrText>
                    or share via social network
                </AttachOrText>
                {/* Buttons */}
                <ButtonsBlock>
                    <Button
                        style={{
                            width: socialButtomWidth,
                            height: socialButtomWidth,
                        }}
                        onPress={() => {

                        }}
                    >
                        < FacebookIcon width={24} height={24} />
                    </Button>
                    <Button
                        style={{
                            width: socialButtomWidth,
                            height: socialButtomWidth,
                        }}
                        onPress={() => {

                        }}
                    >
                        < GoogleIcon width={24} height={24} />
                    </Button>
                    <Button
                        style={{
                            width: socialButtomWidth,
                            height: socialButtomWidth,
                        }}
                        onPress={() => {

                        }}
                    >
                        < InstagramIcon width={24} height={24} />
                    </Button>
                    <Button
                        style={{
                            width: socialButtomWidth,
                            height: socialButtomWidth,
                        }}
                        onPress={() => {

                        }}
                    >
                        < LinkedinIcon width={24} height={24} />
                    </Button>
                    <Button
                        style={{
                            width: socialButtomWidth,
                            height: socialButtomWidth,
                        }}
                        onPress={() => {

                        }}
                    >
                        < TwitterIcon width={24} height={24} />
                    </Button>

                </ButtonsBlock>
                {/* </AttachContainer> */}


            </Animated.View >
        </>
    )
}

export default InviteFriendsPopup;
