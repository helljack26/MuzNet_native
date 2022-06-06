import React from "react";
import { useEffect } from 'react';
import { getWindowDimension } from '@/components/helpers/getWindowDimension'

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
import { M } from '@/res/mixin'
const {
    BlackBtn,
    BlackBtnText
} = M;
const ModalWindow = ({ isOpen, setOpen, type, title, advice, btnText }) => {
    console.log("🚀 ~ file: ModalWindow.jsx ~ line 27 ~ ModalWindow ~ isOpen", isOpen)
    const { windowHeight, windowWidth } = getWindowDimension()

    useEffect(() => {

    }, [isOpen]);
    const isWrongIcon = type === true && <ModalWrongIcon width={80} height={80} />
    return (
        <ModalWindowContainer
            style={{
                width: windowWidth,
                height: windowHeight,
            }}
        >
            <ModalWindowBlock>
                <CloseButton
                    onPress={() => { setOpen(false) }}  >
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

                <BlackBtn
                    style={{
                        width: '90%',
                        marginTop: 20,
                    }}
                    onPress={() => setOpen(false)}
                >
                    <BlackBtnText>
                        {btnText}
                    </BlackBtnText>
                </BlackBtn>
            </ModalWindowBlock>

        </ModalWindowContainer>

    );
}

export default ModalWindow;