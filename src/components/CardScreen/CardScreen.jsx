import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import Collapsible from 'react-native-collapsible';
// Components
import RateBlock from "@/components/RateBlock";
import CardImageSlider from './CardImageSlider'
import CardFullscreenImageSlider from './CardFullscreenImageSlider'
import CardFullscreenReviews from './CardFullscreenReviews'
import CardMediaImage from './CardMediaImage'
import CardLocationBlock from './CardLocationBlock'
import CardReviewsList from './CardReviewsList'
import CardSimilarList from './CardSimilarList'
import CardSendMessage from './CardSendMessage'

// Helpers
import { getWindowDimension } from '@/components/helpers/getWindowDimension'
import { skillGenerator } from './scripts/skillGenerator'
import { eventDateString } from './scripts/eventDateString'
// Images
import IMAGES from '@/res/images'
const {
    ShareWhiteIcon,
    GoBackWhiteIcon,
    MapPointIcon,
    WarningGrayIcon,
    ClockGrayIcon,
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
    CardMainInfo,
    CardInfoRow,
    CardLocation,
    CardLocationText,
    CardTitle,
    CardInfoDate,
    CardInfoDateText,
    GenreBlock,
    Genre,
    GenreText,
    DescriptionContainer,
    DescriptionContainerTitle,
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
    WarningBlock,
    WarningBlockText,
    // Bottom buttons
    ContentBlock,
    ContentBlockRow,
    ContainerPerHour,
    PricePerHourValue,
    PricePerHourText,
    ButtonSubmit,
    ButtonSubmitText,
} = style;

const CardScreen = ({ isMusician, data, routeId }) => {
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
    const cardBandMembers = (isMusicianTrue && data.userMusicianType === 'Band') && data.userBandMembers
    const cardSkills = isMusicianTrue ? data.userSkills : data.adSkills
    const cardMusicalInstrument = isMusicianTrue ? data.userMusicalInstrument : data.adMusicalInstrument
    const cardMusicianType = data.adTypeOfMusician
    const cardAddress = !isMusicianTrue && data.adAddress
    const cardCoords = !isMusicianTrue && data.coordinate
    const willingToTravel = data.willingToTravel
    const adEventTime = data.adEventTime
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
    const [fullscreenReviewState, setFullscreenReviewState] = useState({ isOpen: false, initialReview: 0, isViewAll: false, });

    // Send message state
    const [isOpenSendMessage, setOpenSendMessage] = useState(true)

    // Reset state on focus
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setShowMoreDescription(true)
            setFullscreenImgState({ isOpen: false, initialSlide: 0, })
        });
        return unsubscribe;
    }, [navigation]);

    // Scroll top when press on similar
    const scrollViewRef = useRef(null)
    const [isScrollToTop, setScrollToTop] = useState(false);
    const scrollTop = () => { if (scrollViewRef.current) { setTimeout(() => { scrollViewRef.current.scrollTo({ y: 0, animated: false }) }, 20); } }
    useEffect(() => {
        if (isScrollToTop === true) {
            scrollTop()
            setTimeout(() => {
                setScrollToTop(false)
            }, 20);
        }
    }, [isScrollToTop]);

    // Components
    const locationComponent = cardLocation !== undefined ?
        <CardLocation
            style={{
                marginTop: isMusicianTrue ? 0 : 11,
            }}
        >
            <MapPointIcon width={12} height={17} />
            <CardLocationText>{cardLocation}</CardLocationText>
        </CardLocation>
        :
        <CardLocation></CardLocation>

    const rateComponent = <RateBlock reviewData={cardReviews} screenType={'card'} />
    const titleComponent = <CardTitle>{cardTitle}</CardTitle>

    const eventDateText = eventDateString(adEventTime)

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
            {/* Fullscreen review */}
            {fullscreenReviewState.isOpen === true &&
                <CardFullscreenReviews
                    cardReviews={cardReviews}
                    fullscreenReviewState={fullscreenReviewState}
                    setFullscreenReviewState={setFullscreenReviewState}
                />
            }
            {/* Send message */}
            {isOpenSendMessage === true &&
                <CardSendMessage
                    receiverId={data.id}
                    receiverName={cardTitle}
                    isMusician={isMusicianTrue}
                    setOpenSendMessage={setOpenSendMessage}
                />
            }

            <CardContainerScrollView
                showsVerticalScrollIndicator={false}
                horizontal={false}
                ref={scrollViewRef}
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
                <CardImageSlider
                    cardImages={cardImages}
                    fullscreenImgState={fullscreenImgState}
                    setFullscreenImgState={setFullscreenImgState}
                />

                <CardInfo>
                    {/* Main info for musician */}
                    {isMusicianTrue &&
                        <CardMainInfo>
                            <CardInfoRow>
                                {/* Location */}
                                {locationComponent}
                                {/* Rate */}
                                {rateComponent}
                            </CardInfoRow>

                            {/* Title */}
                            {titleComponent}

                            {/* Genres */}
                            {(cardGenres !== undefined) && <GenreBlock >
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
                        </CardMainInfo>
                    }
                    {/* Main info for ads */}
                    {!isMusicianTrue &&
                        <CardMainInfo>
                            <CardInfoRow>
                                {/* Title */}
                                {titleComponent}
                                {/* Rate */}
                                {rateComponent}
                            </CardInfoRow>
                            {/* Location */}
                            {locationComponent}
                            {/* Ad event time  */}
                            <CardInfoDate>
                                <ClockGrayIcon width={14} height={14} />
                                <CardInfoDateText>
                                    {eventDateText}
                                </CardInfoDateText>
                            </CardInfoDate>
                            {/* Border */}
                            <CardBorder></CardBorder>
                        </CardMainInfo>
                    }

                    {/* Description */}
                    {cardDescription !== undefined && isDescriptionWithHiddenText === true ?
                        <DescriptionContainer>
                            {!isMusicianTrue && <DescriptionContainerTitle>We are looking for:</DescriptionContainerTitle>}
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

                    {/* Band members list */}
                    {(isMusicianTrue && cardBandMembers) && <CardList>
                        <CardListHeader>Band members:</CardListHeader>
                        <CardListBlock>
                            {cardBandMembers.map((bandMember, key) => {
                                return (
                                    <CardListItem key={key}>
                                        <CardListDot></CardListDot>
                                        <CardListText>
                                            {bandMember}
                                        </CardListText>
                                    </CardListItem>
                                )
                            })}
                        </CardListBlock>
                        {/* Border */}
                        <CardBorder></CardBorder>
                    </CardList>}

                    {/* Musician types list */}
                    {(!isMusicianTrue && cardMusicianType !== undefined) && <CardList>
                        <CardListHeader>Type of musician:</CardListHeader>
                        <CardListBlock>
                            {cardMusicianType.map((musician, key) => {
                                return (
                                    <CardListItem key={key}>
                                        <CardListDot></CardListDot>
                                        <CardListText>
                                            {musician}
                                        </CardListText>
                                    </CardListItem>
                                )
                            })}
                        </CardListBlock>
                        {/* Border */}
                        <CardBorder></CardBorder>
                    </CardList>}

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
                        {/* Border */}
                        <CardBorder></CardBorder>
                    </CardList>}

                    {/* Ad genres */}
                    {(!isMusicianTrue && cardGenres !== undefined) && <CardList>
                        <CardListHeader>Music genres:</CardListHeader>
                        <CardListBlock>
                            {cardGenres.map((genre, key) => {
                                return (
                                    <CardListItem key={key}>
                                        <CardListDot></CardListDot>
                                        <CardListText>
                                            {genre}
                                        </CardListText>
                                    </CardListItem>
                                )
                            })}
                        </CardListBlock>
                        {/* Border */}
                        <CardBorder></CardBorder>
                    </CardList>}

                    {/* Skills list */}
                    {cardSkills !== undefined && <CardList>
                        <CardListHeader>Musician skills:</CardListHeader>
                        <CardListBlock>
                            {skillGenerator(cardSkills).map((skill, key) => {
                                return (
                                    <CardListItem key={key}>
                                        <CardListDot></CardListDot>
                                        <CardListText >
                                            {skill}
                                        </CardListText>
                                    </CardListItem>
                                )
                            })}
                        </CardListBlock>
                        {/* Border */}
                        <CardBorder></CardBorder>
                    </CardList>}

                    {/* Other willing to travel */}
                    {(isMusicianTrue && willingToTravel === true) && <CardList>
                        <CardListHeader>Other:</CardListHeader>
                        <CardListBlock>
                            <CardListItem >
                                <CardListDot></CardListDot>
                                <CardListText>
                                    Willing to travel interstate for gigs
                                </CardListText>
                            </CardListItem>
                        </CardListBlock>
                        {/* Border */}
                        <CardBorder></CardBorder>
                    </CardList>}

                    {/* Media block */}
                    {isMusicianTrue && <CardMediaImage cardImages={cardImages} fullscreenImgState={fullscreenImgState} setFullscreenImgState={setFullscreenImgState} />}

                    {/* Ad location block */}
                    {!isMusicianTrue && <CardLocationBlock cardAddress={cardAddress} cardCoords={cardCoords} />}

                    {/* Review block */}
                    <CardReviewsList cardReviews={cardReviews} fullscreenReviewState={fullscreenReviewState} setFullscreenReviewState={setFullscreenReviewState} />

                    {/* Border */}
                    <CardBorder></CardBorder>

                    {/* Warning */}
                    {isMusician && <WarningBlock>
                        <WarningGrayIcon width={27} height={27} />
                        <WarningBlockText>
                            To protect your payment, never transfer money or communicate outside of the MuzNet app
                        </WarningBlockText>
                    </WarningBlock>
                    }
                    {/* Similar */}
                    <CardSimilarList setScrollToTop={setScrollToTop} isMusician={isMusicianTrue} />
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
                        onPress={() => {
                            setOpenSendMessage(true)
                        }}
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

