import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import Collapsible from 'react-native-collapsible';
// Components
import RateBlock from "@/components/RateBlock";
import CardImageSlider from './CardImageSlider'
import CardFullscreenImageSlider from './CardFullscreenImageSlider'
import CardMediaImage from './CardMediaImage'
import CardReviewsList from './CardReviewsList'

// Helpers
import { getWindowDimension } from '@/components/helpers/getWindowDimension'
import { skillGenerator } from './scripts/skillGenerator'
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
    CardBorder,
    CardList,
    CardListBlock,
    CardListHeader,
    CardListText,
    CardListItem,
    CardListDot,
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
    const cardReviews = isMusicianTrue ? data.userReview : data.adReview
    const cardTitle = isMusicianTrue ? `${data.userFirstName} ${data.userLastName}` : data.adTitle
    const cardGenres = isMusicianTrue ? data.userGenres : data.adGenres
    const cardDescription = isMusicianTrue ? data.userDescription : data.adDescription
    const cardSkills = isMusicianTrue ? data.userSkills : data.adSkills
    const cardMusicalInstrument = isMusicianTrue ? data.userMusicalInstrument : data.adMusicalInstrument
    const cardAddress = data.adAddress
    const willingToTravel = data.willingToTravel
    const costPerHour = data.costPerHour
    const costPerHourCurrency = data.costPerHourCurrency

    // Fullscreen image
    const [fullscreenImgState, setFullscreenImgState] = useState({ isOpen: false, initialSlide: 0, });

    // Description
    const isDescriptionWithHiddenText = cardDescription.length > 201
    const descriptionFirstPart = cardDescription.slice(0, 200)
    const descriptionSecondPart = cardDescription.slice(201, cardDescription.length)
    const [showMoreDescription, setShowMoreDescription] = useState(true);

    // Review block
    const [fullscreenReviewState, setFullscreenReviewState] = useState(false);

    // Reset state on focus
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setShowMoreDescription(true)
            setFullscreenImgState({ isOpen: false, initialSlide: 0, })
        });
        return unsubscribe;
    }, [navigation]);


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
                        <RateBlock reviewData={cardReviews} screenType={'card'} />
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
                    {cardDescription !== undefined && isDescriptionWithHiddenText === true ?
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

                    {/* Border */}
                    <CardBorder></CardBorder>

                    {/* Skills list */}
                    {cardSkills !== undefined && <CardList>
                        <CardListHeader>Skills:</CardListHeader>
                        <CardListBlock>
                            {skillGenerator(cardSkills).map((skill, key) => {
                                return <CardListText key={key}>
                                    {skill}
                                </CardListText>
                            })}
                        </CardListBlock>
                    </CardList>}

                    {/* Border */}
                    <CardBorder></CardBorder>

                    {/* Instruments */}
                    {cardMusicalInstrument !== undefined && <CardList>
                        <CardListHeader>Instruments:</CardListHeader>
                        <CardListBlock>
                            {cardMusicalInstrument.map((skill, key) => {
                                return (
                                    <CardListItem key={key}>
                                        <CardListDot></CardListDot>
                                        <CardListText>
                                            {skill}
                                        </CardListText>
                                    </CardListItem>
                                )
                            })}
                        </CardListBlock>
                    </CardList>}

                    {/* Border */}
                    <CardBorder></CardBorder>

                    {/* Media block */}
                    <CardMediaImage cardImages={cardImages} fullscreenImgState={fullscreenImgState} setFullscreenImgState={setFullscreenImgState} />

                    {/* Border */}
                    <CardBorder></CardBorder>

                    {/* Review block */}
                    <CardReviewsList cardReviews={cardReviews} fullscreenReviewState={fullscreenReviewState} setFullscreenReviewState={setFullscreenReviewState} />

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

