import React from 'react';

import FavoriteAndViewNumBlock from "@/components/FavoriteAndViewNumBlock";

import ShareButton from '@/components/Buttons/ShareButton/ShareButton';
import AddToFavoriteButton from '@/components/Buttons/AddToFavoriteButton/AddToFavoriteButton'

import { styles } from './style'
const {
    Card_details,
    Details_mobile,
} = styles;

const CardDetailsButtonBar = ({ inFavorite, favoriteNumber, viewNumber, percentButtonLarge }) => {

    return (
        <Card_details>
            <FavoriteAndViewNumBlock
                favoriteNumber={favoriteNumber}
                viewNumber={viewNumber}
                isForCard={true}
            />

            {/* Buttons */}
            <Details_mobile>
                {percentButtonLarge !== undefined && percentButtonLarge}
                <ShareButton isBig={true} />
                <AddToFavoriteButton isBig={true} inFavorite={inFavorite} />
            </Details_mobile>
        </Card_details>
    )
}

export default CardDetailsButtonBar;