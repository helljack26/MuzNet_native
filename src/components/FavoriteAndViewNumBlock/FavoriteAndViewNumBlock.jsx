import React from "react";

import F from '@/res/fonts'
import C from '@/res/colors'

// Images
import IMAGES from '@/res/images'
const {
    ViewIcon, HeartSmallIcon
} = IMAGES;
// Styles
import styled from "styled-components/native";

const ItemsContainer = styled.View`
display: flex;
align-items: center;
flex-direction: row;
`;

const ItemBlock = styled.View`
display: flex;
flex-wrap: nowrap;
align-items: center;
flex-direction: row;
margin-right: 5px;
`;
const Text = styled.Text`
color: ${C.mainBlack};
font-family: ${F.light};
font-size: ${props => props.isForCard ? 13 + 'px' : 10 + 'px'};
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 2px;
margin-right: 5px;
margin-left: 5px;
`;

const FavoriteAndViewNumBlock = ({ favoriteNumber, viewNumber, isForCard }) => {
    if (favoriteNumber === undefined || viewNumber === undefined) return

    const ForCard = <ItemsContainer>
        <ItemBlock>
            <HeartSmallIcon width={13} height={14} />
            <Text isForCard={isForCard}>{favoriteNumber}</Text>
        </ItemBlock>

        <ItemBlock>
            <ViewIcon width={17} height={13} />
            <Text isForCard={isForCard}>{viewNumber}</Text>
        </ItemBlock >
    </ItemsContainer>

    const ForOther = <ItemsContainer>
        <ItemBlock>
            <HeartSmallIcon width={13} height={10} />
            <Text isForCard={isForCard}>{favoriteNumber}</Text>
        </ItemBlock>

        <ItemBlock>
            <ViewIcon width={13} height={13} />
            <Text isForCard={isForCard}>{viewNumber}</Text>
        </ItemBlock >
    </ItemsContainer>


    return isForCard === true ? ForCard : ForOther
}
export default FavoriteAndViewNumBlock; 