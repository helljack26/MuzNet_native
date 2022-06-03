import React from "react";
import { Dimensions, Image, Keyboard } from "react-native";
import { useEffect } from 'react';
import { useState } from 'react';

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
} = style;

import { M } from '@/res/mixin'
const {
    BlackBtn,
    BlackBtnText
} = M;
const AfterSubmitWindow = ({ isOpen, setOpen, windowImage, title, message, buttonText, afterSubmitButton }) => {
    const screen = Dimensions.get("screen");
    const [dimensions, setDimensions] = useState({ screen });

    const windowHeight = Math.round(dimensions.screen.height)
    const windowWidth = Math.round(dimensions.screen.width)

    useEffect(() => {
        if (isOpen === true) {
            Keyboard.dismiss()

        }
        const subscription = Dimensions.addEventListener(
            "change",
            ({ screen }) => {
                setDimensions({ screen });
            }
        );
        return () => subscription?.remove();
    }, [isOpen]);

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
            </ModalWindowBlock>

            {/* Button */}
            <ButtonBlock>

                <BlackBtn onPress={afterSubmitButton}>

                    <BlackBtnText>
                        {buttonText}
                    </BlackBtnText>

                </BlackBtn>
            </ButtonBlock>
        </ModalWindowContainer>

    );
}

export default AfterSubmitWindow;