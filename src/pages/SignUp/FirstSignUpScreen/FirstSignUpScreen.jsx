import React from 'react';
import { StatusBar } from 'react-native';

// import { useState } from 'react';
import {
    useNavigation
    // , useRoute 
} from '@react-navigation/native';

// Images
import IMAGES from '@/res/images'
const {
    PlainLogo,
    FacebookIcon,
    GoogleIcon,
    MailIcon,
} = IMAGES;
// Styles
import { style } from './style'
const {
    Container,
    Content,
    ContentTitle,
    Button,
    ButtonText,
    ContentBlock,
    ContainerText,
    ContainerLink,
    ContainerLinkText,
} = style;

const FirstSignUpScreen = () => {
    const navigation = useNavigation();

    return (
        <>
            <StatusBar
                barStyle={'dark-content'}
                hidden={false}
                backgroundColor="transparent"
                translucent={true}
            />
            {/* Image */}
            <Container>
                <PlainLogo width={101} height={101} resizeMode="cover" />

                <Content>

                    <ContentTitle>
                        Koin
                    </ContentTitle>

                    <Button>
                        <FacebookIcon width={10} height={20} />
                        <ButtonText>
                            Continue with Google
                        </ButtonText>
                    </Button>
                    <Button>
                        <GoogleIcon width={20} height={20} />

                        <ButtonText>
                            Continue with Facebook
                        </ButtonText>
                    </Button>
                    <Button
                        onPress={() => {
                            navigation.navigate('LoginScreen');
                        }}
                    >
                        <MailIcon width={20} height={24} />

                        <ButtonText>
                            Continue with Email
                        </ButtonText>
                    </Button>

                    <ContentBlock>

                        <ContainerText>
                            Already have an account?
                        </ContainerText>
                        <ContainerLink>
                            onPress={() => {
                                navigation.navigate('OnBoardingScreen');
                            }}

                            <ContainerLinkText>
                                Sign In
                            </ContainerLinkText>
                        </ContainerLink>
                    </ContentBlock>
                    <ContainerLink
                        style={{ marginTop: 20 }}

                    >

                    </ContainerLink>
                </Content>

            </Container>
        </>

    )
}

export default FirstSignUpScreen;