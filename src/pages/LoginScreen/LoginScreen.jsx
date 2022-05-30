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

const LoginScreen = () => {
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
                        Welcome Back!
                    </ContentTitle>

                    <Button>
                        <FacebookIcon width={10} height={20} />
                        <ButtonText>
                            Log In with Google
                        </ButtonText>
                    </Button>
                    <Button>
                        <GoogleIcon width={20} height={20} />

                        <ButtonText>
                            Log In with Facebook
                        </ButtonText>
                    </Button>
                    <Button>
                        <MailIcon width={20} height={24} />

                        <ButtonText>
                            Log In with Email
                        </ButtonText>
                    </Button>

                    <ContentBlock>

                        <ContainerText>
                            Don’t have an account?
                        </ContainerText>
                        <ContainerLink>
                            <ContainerLinkText>
                                Sign Up
                            </ContainerLinkText>
                        </ContainerLink>
                    </ContentBlock>
                    <ContainerLink
                        onPress={() => {
                            navigation.navigate('OnBoardingScreen');
                        }}
                    >
                        <ContainerLinkText>
                            Back to onboarding screen
                        </ContainerLinkText>
                    </ContainerLink>
                </Content>

            </Container>
        </>

    )
}

export default LoginScreen;