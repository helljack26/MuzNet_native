import React from "react";
import { useState } from 'react';

// Styles
import { style } from './style'
import RateBlock from "@/components/RateBlock";

const {
    ItemContainer,
    ItemImageBlock,
    ItemImage,
    // Info
    ItemInfo,
    ItemInfoBlock,
    ItemInfoName,
    ItemInfoDate,
    ItemReviewBlock,
    ItemReviewText,
    ItemReviewReadMoreTextDots,
    ItemReviewReadMoreText,
} = style;

const CardReviewItem = ({ reviewData }) => {
    if (reviewData === undefined) return null

    const {
        reviewDate,
        reviewRate,
        reviewWritter,
        reviewerAvatar,
        reviewMessage
    } = reviewData;

    const getDaysLeftString = (dueDate) => {
        const currentDate = Date.now();
        const subscriptionDeadline = new Date(dueDate);
        const convertedDate = +subscriptionDeadline.getDate() + "." + (subscriptionDeadline.getMonth() + 1) + "." + subscriptionDeadline.getFullYear()
        const daysLeft = Math.abs(Math.floor((dueDate - currentDate) / 86400000))
        const isDay = dueDate > 86400000 ? `${daysLeft} days ago` : 'Today'

        return { convertedDate, isDay }
    }
    const { convertedDate, isDay } = getDaysLeftString(reviewDate)

    // Description
    const isDescriptionWithHiddenText = reviewMessage.length > 160
    const descriptionFirstPart = reviewMessage.slice(0, 160)
    console.log(reviewMessage.length);
    return (
        <ItemContainer>
            {/* Main data */}
            <ItemInfo>
                {/* Image */}
                <ItemImageBlock>
                    <ItemImage source={reviewerAvatar} resizeMode={'cover'} />
                </ItemImageBlock>

                <ItemInfoBlock>
                    {/* Name */}
                    <ItemInfoName>
                        {reviewWritter}
                    </ItemInfoName>
                    <ItemInfoDate>
                        {isDay}
                    </ItemInfoDate>
                </ItemInfoBlock>
            </ItemInfo>

            {/* Review text */}
            <ItemReviewBlock>
                <ItemReviewText>
                    {descriptionFirstPart}
                    {isDescriptionWithHiddenText === true &&
                        <>
                            <ItemReviewReadMoreTextDots> ... </ItemReviewReadMoreTextDots>
                            <ItemReviewReadMoreText>Read more</ItemReviewReadMoreText>
                        </>
                    }
                </ItemReviewText>


            </ItemReviewBlock>

        </ItemContainer>

    );
}


export default CardReviewItem;