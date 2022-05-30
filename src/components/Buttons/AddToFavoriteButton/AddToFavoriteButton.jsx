import React, { useState, useEffect } from 'react';

import IMAGES from '@/res/images'
import ICONSIZE from '@/res/sizes'

const { HeartDefault, HeartActive } = IMAGES;

// Styles
import { styleCatalogButton } from '../styleCatalogButton'
import { styleRecommendationButton } from '../styleRecommendationButton'

const AddToFavoriteButton = ({ inFavorite, isBig, isRecommendation }) => {
    const iconSize = isRecommendation !== undefined ? ICONSIZE.iconSmRecommendation : ICONSIZE.iconDefault;
    // Style defined
    const style = isRecommendation !== undefined ? styleRecommendationButton : styleCatalogButton;
    const { ButtonLarge, ButtonSmall } = style;

    const [type, setType] = useState();

    useEffect(() => {
        return inFavorite !== undefined ? setType(inFavorite) : null;
    }, [setType, inFavorite])

    const largeStyle = type === true ?
        <ButtonLarge onPress={() => setType(false)} >
            <HeartActive width={ICONSIZE.iconDefault} height={ICONSIZE.iconDefault} />
        </ButtonLarge>
        :
        <ButtonLarge onPress={() => setType(true)} >
            <HeartDefault width={ICONSIZE.iconDefault} height={ICONSIZE.iconDefault} />
        </ButtonLarge>

    const smallStyle = type === true ?
        <ButtonSmall onPress={() => setType(false)} >
            <HeartActive width={iconSize} height={iconSize} />
        </ButtonSmall>
        :
        <ButtonSmall onPress={() => setType(true)} >
            <HeartDefault width={iconSize} height={iconSize} />
        </ButtonSmall>

    return isBig === true ? largeStyle : smallStyle;
}

export default AddToFavoriteButton;

