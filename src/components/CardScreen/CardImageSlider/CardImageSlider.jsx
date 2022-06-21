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
    SliderContainer,
    SliderScrollView,
    SliderImagePressable,
    SliderImage,
    SliderDots,
    SliderDotsBlock,
    SliderDot
} = style;

const CardImageSlider = ({ cardImages, fullscreenImgState, setFullscreenImgState }) => {
    const { windowHeight, windowWidth } = getWindowDimension()
    const [initialContentOffset, setInitialContentOffset] = useState();
    useEffect(() => {
        if (fullscreenImgState.isOpen === true && fullscreenImgState.initialSlide > 0) {
            const paddingLeft = windowWidth * fullscreenImgState.initialSlide
            setInitialContentOffset(paddingLeft)
        }
    }, [fullscreenImgState.isOpen]);

    const onSlide = (nativeEvent) => {
        if (nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
            if (slide !== fullscreenImgState.initialSlide) {
                setFullscreenImgState({ isOpen: false, initialSlide: slide });
            }
        }
    }
    const dotsBlockWidth = ((cardImages.length * 8) + ((cardImages.length - 1) * 8)) + 16
    return (
        <SliderContainer>
            <SliderScrollView
                onScroll={({ nativeEvent }) => onSlide(nativeEvent)}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                pagingEnabled={true}
                contentOffset={{
                    x: initialContentOffset !== undefined ? initialContentOffset : 0,
                    y: 0
                }}
            >
                {cardImages.map((img, key) => {
                    return (
                        <SliderImagePressable
                            key={key}
                            onPress={() => {
                                setFullscreenImgState({
                                    isOpen: true,
                                    initialSlide: key,
                                })
                            }}
                        >
                            <SliderImage
                                style={{
                                    width: windowWidth,
                                    height: windowHeight / 2,
                                }}
                                source={img}
                                resizeMode={'cover'}
                            />
                        </SliderImagePressable>)
                })}
            </SliderScrollView>

            <SliderDots>
                <SliderDotsBlock
                    style={{
                        width: dotsBlockWidth,
                    }}
                >
                    {cardImages.map((img, key) => {
                        const isActive = key === fullscreenImgState.initialSlide
                        const isFirst = key === 0
                        return <SliderDot isFirst={isFirst} isActive={isActive} key={key}></SliderDot>
                    })}
                </SliderDotsBlock>
            </SliderDots>

        </SliderContainer>
    );

}

export default CardImageSlider;