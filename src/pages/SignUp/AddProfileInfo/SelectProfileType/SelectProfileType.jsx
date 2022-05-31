import React from 'react';
import { Image } from 'react-native';

import { useState } from 'react';

// Images
import IMAGES from '@/res/images'
const {
    RoundBlackCheckIcon,

} = IMAGES;
// Styles
import { style } from './style'
const {
    Container,

} = style;

const SelectProfileType = ({ setUserType }) => {

    const [isContractor, setIsContractor] = useState(false);
    const [isMusician, setIsMusician] = useState(false);


    return (
        <>

            {/* Image */}
            <Container>

                <SelectItem
                    isActive={isContractor}
                >
                    <CheckBox isActive={isContractor}>
                        {isContractor === true && <RoundBlackCheckIcon width={24} height={24} />}
                    </CheckBox>

                    <ImageBlock>
                        <Image source={IMAGES.SelectContractor} />
                    </ImageBlock>

                    <SelectTextBlock>
                        <SelectText>
                            Contractor
                        </SelectText>
                    </SelectTextBlock>

                </SelectItem>

            </Container>
        </>

    )
}

export default SelectProfileType;