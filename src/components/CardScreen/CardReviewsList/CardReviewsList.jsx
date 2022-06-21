import React from 'react';
import { View } from 'react-native';
// Components
import RateBlock from "@/components/RateBlock";
import CardReviewItem from "./CardReviewItem";
// Helpers
import { getWindowDimension } from '@/components/helpers/getWindowDimension'
// Styles
import styled from 'styled-components/native';
import { M } from '@/res/mixin'

const SliderContainer = styled.View`
/* width: 100%; */
`;
const SliderScrollView = styled.ScrollView`
margin-top: 15px;
margin-bottom: 16px;
margin-left: -16px;
margin-right: -16px;
padding-left: 16px;
`;
const SliderScrollViewItem = styled.ScrollView`
border-radius: 6px;
margin: 0px 4px;
`;
const ReviewViewAllBtn = styled(M.BorderBtn)`

`;
const ReviewViewAllBtnText = styled(M.BorderBtnText)`

`;
const CardReviewsList = ({ cardReviews, fullscreenReviewState, setFullscreenReviewState }) => {
    const { windowWidth } = getWindowDimension()
    const CARD_WIDTH = windowWidth * 0.85;
    return (
        <SliderContainer>
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
                        <SliderScrollViewItem
                            key={key}
                            style={{
                                width: CARD_WIDTH - 20,
                                marginLeft: isFirst === true ? 0 : 5,
                                marginRight: isLast === true ? 36 : 5,
                            }}>
                            <CardReviewItem reviewData={review} key={key} />
                        </SliderScrollViewItem>
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