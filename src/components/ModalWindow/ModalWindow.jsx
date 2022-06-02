import React from "react";
import { Dimensions } from "react-native";
import { useEffect } from 'react';
import { useState } from 'react';
// Images
import IMAGES from '@/res/images'
const {
    ModalWrongIcon,
    CrossBlackIcon,
} = IMAGES;
// Styles
import { style } from './style'

const {
    ModalWindowContainer,
    ModalWindowBlock,
    CloseButton,
    ModalIcon,
    ModalTitle,
    ModalAdvice,
} = style;

const ModalWindow = ({ isOpen, setOpen, type, title, advice }) => {
    const screen = Dimensions.get("screen");
    const [dimensions, setDimensions] = useState({ screen });

    const windowHeight = Math.round(dimensions.screen.height)
    const windowWidth = Math.round(dimensions.screen.width)

    useEffect(() => {
        const subscription = Dimensions.addEventListener(
            "change",
            ({ screen }) => {
                setDimensions({ screen });
            }
        );
        return () => subscription?.remove();
    });


    const isWrongIcon = type === true && <ModalWrongIcon width={50} height={50} />
    return (isOpen === true &&

        <ModalWindowContainer
            style={{
                width: windowWidth,
                height: windowHeight,
            }}
        >
            <ModalWindowBlock>

                <CloseButton
                    onPress={() => {
                        setOpen(false)
                    }}
                >
                    <CrossBlackIcon width={14} height={14} />
                </CloseButton>

                <ModalIcon>
                    {isWrongIcon}
                </ModalIcon>

                <ModalTitle>
                    {title}
                </ModalTitle>
                <ModalAdvice>
                    {advice}
                </ModalAdvice>
            </ModalWindowBlock>

        </ModalWindowContainer>

    );
}

export default ModalWindow;