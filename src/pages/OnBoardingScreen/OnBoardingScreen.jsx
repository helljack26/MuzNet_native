import React, { useEffect, useState } from 'react';

import { StatusBar, TouchableOpacity } from 'react-native';
import {
    useNavigation
    // , useRoute 
} from '@react-navigation/native';

// Images
import IMAGES from '@/res/images'
const {
    ArrowIcon
} = IMAGES;
// Styles
import { style } from './style'
const {
    OnboardImageBlock,
    OnboardImage,
    Container,
    Content,
    ContentTitle,
    ContentText,
    IndicatorBlock,
    IndicatorTumb,
    IndicatorItem,
    ButtonsBlock,
    Button,
    ButtonText,
    ButtonStart,
    ButtonStartText,
} = style;

const OnboardingContent = [
    {
        image: IMAGES.Onboard1,
        title: 'Welcome to MuzNet!',
        text: 'The place where musicians and venues meet.',
        thumbOffsetLeft: 0
    },
    {
        image: IMAGES.Onboard2,
        title: 'Find your next gig',
        text: 'You’re a musician? Great! Choose from the list of gigs to book your next performance.',
        thumbOffsetLeft: 14
    },
    {
        image: IMAGES.Onboard3,
        title: 'Hire musicians',
        text: 'Have a venue to offer? Find the most talented musicians to perform at your place.',
        thumbOffsetLeft: 27
    },
    {
        image: IMAGES.Onboard4,
        title: 'Find your perfect match',
        text: 'It’s time to connect skillful musicians with unique venues. ',
        thumbOffsetLeft: 41
    },
]

const OnBoardingScreen = () => {
    const navigation = useNavigation();

    const [screenNumber, setScreenNumber] = useState(0);
    const image = OnboardingContent[screenNumber].image
    const title = OnboardingContent[screenNumber].title
    const text = OnboardingContent[screenNumber].text
    const offsetLeft = OnboardingContent[screenNumber].thumbOffsetLeft

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            navigation.navigate('SignUpStack', { screen: 'AddProfileInfo' });
        });

        return unsubscribe;
    }, [navigation]);

    return (
        <>
            <StatusBar
                barStyle={'light-content'}
                hidden={false}
                backgroundColor="transparent"
                translucent={true}
            />
            {/* Image */}
            <Container >
                <OnboardImageBlock>
                    <OnboardImage source={image} resizeMode="contain" />
                </OnboardImageBlock>

                {/* Content */}
                <Content style={{ flex: 1, height: '100%', }}>

                    <ContentTitle>
                        {title}
                    </ContentTitle>
                    <ContentText>
                        {text}
                    </ContentText>

                    {/* Indicators */}
                    <IndicatorBlock>
                        {/* Black border */}
                        <IndicatorTumb left={offsetLeft}></IndicatorTumb>

                        {/*  Dots */}
                        <IndicatorItem></IndicatorItem>
                        <IndicatorItem></IndicatorItem>
                        <IndicatorItem></IndicatorItem>
                        <IndicatorItem></IndicatorItem>
                        <IndicatorItem></IndicatorItem>

                    </IndicatorBlock>

                    <ButtonsBlock>
                        {screenNumber < 3 ?
                            <>
                                <Button
                                    onPress={() => {
                                        navigation.navigate('LoginStack', {
                                            screen: 'WelcomeBackScreen'
                                        });
                                    }} >
                                    <ButtonText isSkip={true}>
                                        Skip
                                    </ButtonText>
                                </Button>
                                <Button
                                    onPress={() => {
                                        setScreenNumber(screenNumber + 1)
                                    }} >
                                    <ButtonText>
                                        Next
                                    </ButtonText>
                                    <ArrowIcon width={19} height={14} />

                                </Button>

                            </>
                            :
                            <ButtonStart
                                onPress={() => {
                                    navigation.navigate('LoginStack', {
                                        screen: 'WelcomeBackScreen'
                                    });

                                }} >
                                <ButtonStartText>
                                    Get Started
                                </ButtonStartText>
                            </ButtonStart>

                        }
                    </ButtonsBlock>
                    <Button
                        style={{
                            position: 'absolute',
                            width: '100%',
                            bottom: 50,
                            right: 0,
                            left: 0,
                            flex: 1,
                            paddingLeft: 60,
                            justifyContent: 'center',
                            flexDirection: 'row',

                        }}
                    >
                        <Button

                            onPress={() => {
                                navigation.navigate('ContractorStack', { screen: 'ContractorWelcomeScreen' });
                            }} >
                            <ButtonText>
                                Contractor
                            </ButtonText>
                        </Button>
                        <Button
                            style={{
                                paddingLeft: 20,

                            }}
                            onPress={() => {
                                navigation.navigate('MusicianStack', { screen: 'MusicianWelcomeScreen' });
                            }} >
                            <ButtonText>
                                Musician
                            </ButtonText>
                        </Button>
                    </Button>
                </Content>
            </Container>


        </>
    )
}

export default OnBoardingScreen;