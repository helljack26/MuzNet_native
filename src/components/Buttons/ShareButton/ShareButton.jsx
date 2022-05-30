import React from 'react';

import IMAGES from '@/res/images'
import ICONSIZE from '@/res/sizes'

const { ShareIcon } = IMAGES;

// Styles
import { styleCatalogButton } from '../styleCatalogButton'
import { styleRecommendationButton } from '../styleRecommendationButton'

const ShareButton = ({ isBig, isRecommendation }) => {
    const iconSize = isRecommendation !== undefined ? ICONSIZE.iconSmRecommendation : ICONSIZE.iconDefault;
    // Style defined
    const style = isRecommendation !== undefined ? styleRecommendationButton : styleCatalogButton;

    const { ButtonLarge, ButtonSmall } = style;

    return isBig === true ?
        <ButtonLarge >
            <ShareIcon width={ICONSIZE.iconDefault} height={ICONSIZE.iconDefault} />
        </ButtonLarge>
        :
        <ButtonSmall >
            <ShareIcon width={iconSize} height={iconSize} />
        </ButtonSmall>
}

export default ShareButton;

