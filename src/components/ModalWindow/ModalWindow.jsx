import React from "react";
import { useEffect } from 'react';
import { Image } from 'react-native';

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
    const { windowHeight, windowWidth } = getWindowDimension()

    useEffect(() => {

    }, [isOpen]);
    const isWrongIcon = type === true ? <ModalWrongIcon width={80} height={80} /> :
        <Image source={IMAGES.GifSuccessCheck}
            style={{
                width: '120%',
                height: '120%',

            }}
            resizeMode={'cover'} width={'100%'} height={'100%'} />
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