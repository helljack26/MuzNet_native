import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import Collapsible from 'react-native-collapsible';
// Components
import CardImageSlider from './CardImageSlider'
import CardFullscreenImageSlider from './CardFullscreenImageSlider'
import RateBlock from "@/components/RateBlock";

// Helpers
import { getWindowDimension } from '@/components/helpers/getWindowDimension'
// Images
import IMAGES from '@/res/images'
const {
    ShareWhiteIcon,
    GoBackWhiteIcon,
    MapPointIcon
} = IMAGES;
// Variables
import C from '@/res/colors'
import { S } from '@/res/strings'

// Styles
import { style } from './style'
const {
    CardContainer,
    CardContainerScrollView,
    Header,
    HeaderClose,
    // Card info
    CardInfo,
    CardInfoRow,
    CardLocation,
    CardLocationText,
    CardTitle,
    GenreBlock,
    Genre,
    GenreText,
    DescriptionContainer,
    DescriptionContainerText,
    ShowDescriptionButton,
    ShowDescriptionButtonText,
    // Bottom buttons
    ContentBlock,
    ContentBlockRow,
    ContainerPerHour,
    PricePerHourValue,
    PricePerHourText,
    ButtonSubmit,
    ButtonSubmitText,
} = style;

const CardScreen = ({ isMusician, data }) => {
    const navigation = useNavigation();

    const { windowHeight, windowWidth } = getWindowDimension()
    // Define musician or ad
    const isMusicianTrue = isMusician === true

    const cardImages = isMusicianTrue ? data.userAvatar : data.adImage
    const cardLocation = isMusicianTrue ? data.userLocation : data.adLocation
    const userReview = isMusicianTrue ? data.userReview : data.adReview
    const cardTitle = isMusicianTrue ? `${data.userFirstName} ${data.userLastName}` : data.adTitle
    const cardGenres = isMusicianTrue ? data.userGenres : data.adGenres
    const cardDescription = isMusicianTrue ? data.userDescription : data.adDescription
    const cardAddress = data.adAddress
    const willingToTravel = data.willingToTravel
    const cardMusicalInstrument = isMusicianTrue ? data.userMusicalInstrument : data.adMusicalInstrument
    const costPerHour = data.costPerHour
    const costPerHourCurrency = data.costPerHourCurrency

    // Fullscreen image
    const [fullscreenImgState, setFullscreenImgState] = useState({ isOpen: false, initialSlide: 0, });

    // Description
    const isDescriptionWithHiddenText = cardDescription.length > 201
    const descriptionFirstPart = cardDescription.slice(0, 200)
    const descriptionSecondPart = cardDescription.slice(201, cardDescription.length)

    const [showMoreDescription, setShowMoreDescription] = useState(true);

    return (
        <CardContainer
            style={{
                width: windowWidth,
                height: windowHeight,
            }}>
            {/* Fullscreen  image slider */}
            {fullscreenImgState.isOpen === true &&
                <CardFullscreenImageSlider
                    cardImages={cardImages}
                    fullscreenImgState={fullscreenImgState}
                    setFullscreenImgState={setFullscreenImgState}
                />
            }
            <CardContainerScrollView
                showsVerticalScrollIndicator={false}
                horizontal={false}
            >
                {/* Header */}
                <Header>
                    <HeaderClose
                        onPress={() => {
                            navigation.goBack()
                        }}
                    >
                        <GoBackWhiteIcon width={11} height={22} />
                    </HeaderClose>

                    <HeaderClose
                        onPress={() => {
                            setFullscreenImgState({
                                isOpen: false,
                                initialSlide: fullscreenImgState.initialSlide,
                            })
                        }}
                    >
                        <ShareWhiteIcon width={25} height={23} />
                    </HeaderClose>
                </Header>

                {/* Image slider */}
                <CardImageSlider cardImages={cardImages} fullscreenImgState={fullscreenImgState} setFullscreenImgState={setFullscreenImgState} />

                <CardInfo>
                    <CardInfoRow>
                        {/* Location */}
                        {cardLocation !== undefined ?
                            <CardLocation>
                                <MapPointIcon width={12} height={17} />
                                <CardLocationText>
                                    {cardLocation}
                                </CardLocationText>
                            </CardLocation>
                            :
                            <CardLocation></CardLocation>
                        }
                        {/* Rate */}
                        <RateBlock reviewData={userReview} screenType={'card'} />
                    </CardInfoRow>

                    {/* Title */}
                    <CardTitle>
                        {cardTitle}
                    </CardTitle>

                    {/* Genres */}
                    {cardGenres !== undefined && <GenreBlock >
                        {cardGenres.map((genre, key) => {
                            const lowerGenre = genre.toLowerCase()
                            return (genre !== undefined && <Genre key={key} >
                                <GenreText >
                                    {lowerGenre}
                                </GenreText>
                            </Genre>
                            )
                        })}
                    </GenreBlock>}

                    {/* Description */}
                    {cardDescription !== undefined &&
                        isDescriptionWithHiddenText === true ?
                        <DescriptionContainer>
                            <DescriptionContainerText>
                                {descriptionFirstPart}
                                {showMoreDescription === true && ' ...'}
                            </DescriptionContainerText>
                            {/* Collapsible */}
                            <Collapsible collapsed={showMoreDescription} align="center">
                                <DescriptionContainerText>
                                    {descriptionSecondPart}
                                </DescriptionContainerText>
                            </Collapsible>
                            <ShowDescriptionButton
                                onPress={() => {
                                    setShowMoreDescription(!showMoreDescription)
                                }}
                            >
                                <ShowDescriptionButtonText>
                                    {showMoreDescription === true ? 'Show more' : 'Show less'}
                                </ShowDescriptionButtonText>
                            </ShowDescriptionButton>
                        </DescriptionContainer>
                        :
                        <DescriptionContainer>
                            <DescriptionContainerText>
                                {cardDescription}
                            </DescriptionContainerText>
                        </DescriptionContainer>
                    }
                </CardInfo>

            </CardContainerScrollView>

            {/* Bottom block */}
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

