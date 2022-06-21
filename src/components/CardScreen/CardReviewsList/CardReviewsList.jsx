import React from 'react';
import { useState, useRef, useEffect } from 'react';

import { View, Text } from 'react-native';
import RateBlock from "@/components/RateBlock";
import CardReviewItem from "./CardReviewItem";

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
    SliderContainer,
    SliderScrollView,
    ReviewViewAllBtn,
    ReviewViewAllBtnText,
} = style;

const CardReviewsList = ({ cardReviews, fullscreenReviewState, setFullscreenReviewState }) => {

    const { windowHeight, windowWidth } = getWindowDimension()
    const CARD_WIDTH = windowWidth * 0.85;
    const SPACING_FOR_CARD_INSET = windowWidth * 0.1 - 40;
    return (
        <SliderContainer

        >
            {/* Rate */}
            <RateBlock reviewData={cardReviews} screenType={'cardList'} />
            {/* Scroll block */}
            <SliderScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                {cardReviews.map((review, key) => {
                    const isFirst = key === 0
                    const isLast = key === cardReviews.length - 1
                    return (
                        <View
                            key={key}
                            style={{
                                width: CARD_WIDTH - 20,
                                borderRadius: 6,
                                marginHorizontal: 4,
                                marginLeft: isFirst === true ? 0 : 5,
                                marginRight: isLast === true ? 36 : 5,
                            }}
                        >
                            <CardReviewItem reviewData={review} key={key} />
                        </View>
                    )
                })}

            </SliderScrollView>

            <ReviewViewAllBtn
            // onPress={() => { setFullscreenImgState({ isOpen: true, initialSlide: 0, }) }}
            >
                <ReviewViewAllBtnText>
                    View All
                </ReviewViewAllBtnText>
            </ReviewViewAllBtn>
        </SliderContainer>
    );

}

export default CardReviewsList;