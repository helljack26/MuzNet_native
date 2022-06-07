import React from "react";
import C from '@/res/colors'
import F from '@/res/fonts'
import { M } from '@/res/mixin'
// Helpers
import { rateAverageCount } from '@/components/helpers/rateAverageCount'
// Images
import IMAGES from '@/res/images'
const { RateStarIcon } = IMAGES;

// Styles
import styled from "styled-components";
const ListRate = styled.View`
position: absolute;
top: 6px;
right: 8px;
display: flex;
align-items: center;
flex-direction: row;
`;
const ListRateAverage = styled(M.PlainText14)`
color: ${C.black};
margin-left: 4px;
`;
const ListRateFullCountOfReview = styled(M.PlainText14)`
color: ${C.cyanGray};
margin-left: 4px;
`;

const RateBlock = ({ reviewData, screenType }) => {

    const rateAverage = rateAverageCount(reviewData)

    switch (screenType) {
        case 'list':
            return <ListRate>
                <RateStarIcon width={10} height={9} />
                <ListRateAverage>
                    {rateAverage}
                </ListRateAverage>
                <ListRateFullCountOfReview>
                    ({reviewData.length})
                </ListRateFullCountOfReview>
            </ListRate>

        default:
            return
    }

}
export default RateBlock; 