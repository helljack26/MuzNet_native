import React from "react";
import { Image, Keyboard } from "react-native";
import { useEffect } from 'react';

import { getWindowDimension } from '@/components/helpers/getWindowDimension'
import { useNavigation } from '@react-navigation/native';

// Images
import IMAGES from '@/res/images'
const {
    CrossBlackIcon,
} = IMAGES;
// Styles
import { style } from './style'
const {
    ModalWindowContainer,
    ModalWindowBlock,
    ModalIcon,
    ModalTitle,
    ModalAdvice,
    ButtonBlock,
    ContentBlockRow,
    ContainerText,
    ContainerLink,
    ContainerLinkText,
} = style;

import { M } from '@/res/mixin'
const {
    BlackBtn,
    BlackBtnText
} = M;
const AfterSubmitWindow = ({ isOpen, setOpen, windowImage, title, message, buttonText, afterSubmitButton }) => {
    const navigation = useNavigation();

    const { windowHeight, windowWidth } = getWindowDimension()

    useEffect(() => {
        if (isOpen === true) {
            Keyboard.dismiss()
        }
    }, [isOpen]);

    const isEmail = title === 'Check your email'

    const BlackButton = () => {
        return <BlackBtn
            style={{
                marginTop: isEmail === true ? 32 : 0
            }}
            onPress={afterSubmitButton}>
            <BlackBtnText>
                {buttonText}
            </BlackBtnText>
        </BlackBtn>
    }

    const EmailFooterText = () => {
        return <ContentBlockRow>
            <ContainerText>
                Did not receive the email? Check your spam filter or
                <ContainerLink
                    onPress={() => {
                        setOpen(false)
                    }}
                >
                    <ContainerLinkText>try another email address</ContainerLinkText>
                </ContainerLink>
            </ContainerText>
        </ContentBlockRow>
    }

    const isEmailButton = isEmail && <BlackButton />
    const isEmailFooter = isEmail && <EmailFooterText />
    const isSuccessResetPassword = title !== 'Check your email' && <BlackButton />
    return (isOpen === true &&

        <ModalWindowContainer
            style={{
                width: windowWidth,
                height: windowHeight,
            }}
        >
            <ModalWindowBlock>
                <ModalIcon>
                    <Image source={windowImage} resizeMode={'contain'} />
                </ModalIcon>

                <ModalTitle>
                    {title}
                </ModalTitle>

                <ModalAdvice>
                    {message}
                </ModalAdvice>
                {isEmailButton}

            </ModalWindowBlock>

            {/* Button */}
            <ButtonBlock>
                {isSuccessResetPassword}

                {isEmailFooter}
            </ButtonBlock>
        </ModalWindowContainer>

    );
}

export default AfterSubmitWindow;