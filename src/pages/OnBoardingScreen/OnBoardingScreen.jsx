import React, { useEffect, useState } from 'react';

import { StatusBar, Dimensions, Platform } from 'react-native';
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
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad',
        thumbOffsetLeft: 0
    },
    {
        image: IMAGES.Onboard2,
        title: 'Welcome to MuzNet 2!',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut tempor incididunt ut labore et dolore magna aliqua. Ut enim ad',
        thumbOffsetLeft: 14
    },
    {
        image: IMAGES.Onboard3,
        title: 'Welcome to MuzNet 3!',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,it amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad',
        thumbOffsetLeft: 27
    },
    {
        image: IMAGES.Onboard4,
        title: 'Welcome to MuzNet 4!',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad',
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
            setScreenNumber(0)
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
                <OnboardImage source={image} resizeMode="cover" />

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
                                            screen: 'LoginScreen'
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
                                        screen: 'LoginScreen'
                                    });

                                }} >
                                <ButtonStartText>
                                    Get Started
                                </ButtonStartText>
                            </ButtonStart>

                        }

                    </ButtonsBlock>
                </Content>
            </Container>


        </>
    )
}

export default OnBoardingScreen;