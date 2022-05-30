import React from 'react';

import ICONSIZE from '@/res/sizes'
import IMAGES from '@/res/images'

const { PercentIcon } = IMAGES;

// Styles
import { styleCatalogButton } from '../styleCatalogButton'
import { styleRecommendationButton } from '../styleRecommendationButton'

const PercentButton = ({ isBig, isRecommendation }) => {
    const iconSize = isRecommendation !== undefined ? ICONSIZE.iconSmRecommendation : ICONSIZE.iconDefault;
    // Style defined
    const style = isRecommendation !== undefined ? styleRecommendationButton : styleCatalogButton;

    const { ButtonLarge, ButtonSmall } = style;

    return (
        isBig === true ?
            <ButtonLarge  >
                <PercentIcon width={ICONSIZE.iconDefault} height={ICONSIZE.iconDefault} />
            </ButtonLarge>
            :
            <ButtonSmall>
                <PercentIcon width={iconSize} height={iconSize} />
            </ButtonSmall>
    )
}

export default PercentButton;
