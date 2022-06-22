import React from 'react';
import { useState, useCallback, useEffect } from 'react';

import { View, Text } from 'react-native';
// Helpers
import { getWindowDimension } from '@/components/helpers/getWindowDimension'
// Variables
import C from '@/res/colors'
// Images
import IMAGES from '@/res/images'
const {
    PriceRangeBgIcon
} = IMAGES;
// Styles
import { style } from './style'

const {
    MediaContainer,
    MediaBlock,
    MediaImg,
    MediaImgTwoItem,
    MediaImgLeft,
    MediaImgCol,
    MediaImgRight,
    MediaContainerTitle,
    MediaViewAllBtn,
    MediaViewAllBtnText,
    CardBorder,
} = style;

const CardMediaImage = ({ cardImages, setFullscreenImgState }) => {
    if (cardImages.length < 2) return null

    const isTwoImageBlock = cardImages.length === 2 && <MediaBlock>
        <MediaImgTwoItem
            onPress={() => { setFullscreenImgState({ isOpen: true, initialSlide: 0, }) }}>
            <MediaImg source={cardImages[0]} resizeMode={'cover'} />
        </MediaImgTwoItem>

        <MediaImgTwoItem
            onPress={() => { setFullscreenImgState({ isOpen: true, initialSlide: 1, }) }}>
            <MediaImg source={cardImages[1]} resizeMode={'cover'} />
        </MediaImgTwoItem>
    </MediaBlock>

    const isThreeImageBlock = cardImages.length >= 3 && <MediaBlock>
        <MediaImgLeft
            onPress={() => { setFullscreenImgState({ isOpen: true, initialSlide: 0, }) }}>
            <MediaImg source={cardImages[0]} resizeMode={'cover'} />
        </MediaImgLeft>
        <MediaImgCol>

            <MediaImgRight
                onPress={() => { setFullscreenImgState({ isOpen: true, initialSlide: 1, }) }}>
                <MediaImg source={cardImages[1]} resizeMode={'cover'} />
            </MediaImgRight>
            <MediaImgRight
                onPress={() => { setFullscreenImgState({ isOpen: true, initialSlide: 2, }) }}>
                <MediaImg source={cardImages[2]} resizeMode={'cover'} />
            </MediaImgRight>
        </MediaImgCol>
    </MediaBlock>

    return (<MediaContainer>
        <MediaContainerTitle>
            Media
        </MediaContainerTitle>

        {isTwoImageBlock}
        {isThreeImageBlock}

        <MediaViewAllBtn
            onPress={() => { setFullscreenImgState({ isOpen: true, initialSlide: 0, }) }}
        >
            <MediaViewAllBtnText>
                View All
            </MediaViewAllBtnText>
        </MediaViewAllBtn>
        {/* Border */}
        <CardBorder></CardBorder>
    </MediaContainer>

    );

}

export default CardMediaImage;