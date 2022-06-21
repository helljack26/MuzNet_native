import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
// Components
import CardImageSlider from './CardImageSlider'
import CardFullscreenImageSlider from './CardFullscreenImageSlider'

// Helpers
import { getWindowDimension } from '@/components/helpers/getWindowDimension'
// Images
import IMAGES from '@/res/images'
const {
    CrossBlackIcon,
} = IMAGES;
// Variables
import C from '@/res/colors'
import { S } from '@/res/strings'

// Styles
import { style } from './style'
const {
    CardContainer,
    Header,
    HeaderClose,
    ContentBlock,
    ContentBlockRow,
    ContainerPerHour,
    PricePerHourValue,
    PricePerHourText,
    ButtonSubmit,
    ButtonSubmitText,
} = style;

const CardScreen = ({ isMusician, data }) => {
    const { windowHeight, windowWidth } = getWindowDimension()

    // Define musician or ad
    const cardImages = isMusician === true ? data.userAvatar : data.adImage
    const costPerHour = data.costPerHour
    const costPerHourCurrency = data.costPerHourCurrency
    const cardDescription = isMusician === true ? data.userDescription : data.adDescription
    const cardTitle = isMusician === true ? `${data.userFirstName} ${data.userLastName}` : data.adTitle
    const cardLocation = isMusician === true ? data.userLocation : data.adLocation
    const cardAddress = data.adAddress
    const willingToTravel = data.willingToTravel
    const userGenres = isMusician === true ? data.userGenres : data.adGenres
    const userMusicalInstrument = isMusician === true ? data.userMusicalInstrument : data.adMusicalInstrument
    const userReview = isMusician === true ? data.userReview : data.adReview

    // Fullscreen image
    const [fullscreenImgState, setFullscreenImgState] = useState({ isOpen: false, initialSlide: 0, });
    // console.log("🚀 ~ file: CardScreen.jsx ~ line 52 ~ CardScreen ~ fullscreenImgState", fullscreenImgState)

    return (
        <CardContainer
            style={{
                width: windowWidth,
                height: windowHeight,
            }}>
            {/* Fullscreen card image */}
            {fullscreenImgState.isOpen === true &&
                <CardFullscreenImageSlider
                    cardImages={cardImages}
                    fullscreenImgState={fullscreenImgState}
                    setFullscreenImgState={setFullscreenImgState}
                />
            }
            {/* Header */}
            <Header>
                <HeaderClose >
                    <CrossBlackIcon width={16} height={16} />
                </HeaderClose>
            </Header>

            {/* Image slider */}
            <CardImageSlider cardImages={cardImages} fullscreenImgState={fullscreenImgState} setFullscreenImgState={setFullscreenImgState} />

            <ContentBlock>
                <ContentBlockRow>

                    <ContainerPerHour>
                        <PricePerHourValue>{costPerHourCurrency}{costPerHour}</PricePerHourValue>
                        <PricePerHourText> / hour</PricePerHourText>
                    </ContainerPerHour>
                    <ButtonSubmit
                    // onPress={handleSubmit(onSubmit)} 
                    >
                        <ButtonSubmitText>
                            {isMusician ?
                                `Contact ${data.userFirstName}` :
                                'Send Offer'
                            }
                        </ButtonSubmitText>
                    </ButtonSubmit>
                </ContentBlockRow>
            </ContentBlock>

        </CardContainer>
    )
}

export default CardScreen;

