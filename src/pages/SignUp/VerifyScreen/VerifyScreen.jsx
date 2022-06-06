import React from 'react';
import { StatusBar } from 'react-native';

import { useState, useEffect } from 'react';

import GoBack from '@/components/Buttons/GoBack/GoBack'
import ModalWindow from '@/components/ModalWindow'
import VerifyCodeInputs from '@/components/VerifyCodeInputs'

import { useNavigation, useRoute } from '@react-navigation/native';

// Styles
import { style } from './style'
const {
    Container,
    ContentTitle,
    Header,
    FormBlock,
    FormText,
    ContainerText,
    ContentBlock,
    ContainerLink,
    ContainerLinkText,
} = style;

const VerifyScreen = () => {
    const navigation = useNavigation();
    const verifyCode = '0000'

    const route = useRoute();
    const screenTitle = route !== undefined && route.params.screenTitle
    const screenAdvice = route !== undefined && route.params.screenAdvice
    const whereToSendCode = route !== undefined && route.params.whereToSendCode
    const navigateToStackAfterSubmit = route !== undefined && route.params.navigateToStackAfterSubmit
    const navigateToScreenAfterSubmit = route !== undefined && route.params.navigateToScreenAfterSubmit

    // 
    const [isModalOpen, setModalOpen] = useState(false);
    // If wrong
    const [isVerifySuccess, setVerifySuccess] = useState();


    useEffect(() => {
        if (isVerifySuccess === true) {
            navigation.navigate(navigateToStackAfterSubmit,
                { screen: navigateToScreenAfterSubmit })
            setVerifySuccess(false)
        }
    }, [isVerifySuccess]);

    return (
        <>
            <StatusBar
                barStyle={'light-content'}
                hidden={false}
                backgroundColor="transparent"
                translucent={true}
            />
            <Container>
                {isModalOpen === true && <ModalWindow
                    type={true}
                    title={'Oops!'}
                    advice={'It looks like you put in the wrong code, try again'}
                    setOpen={setModalOpen}
                    btnText={'Try Again!'}
                />}
                {/* Header */}
                <Header>
                    <GoBack />

                    <ContentTitle>
                        {screenTitle}
                    </ContentTitle>
                </Header>

                {/* Form */}
                <FormBlock >
                    <FormText>
                        {screenAdvice}
                    </FormText>

                    {/* Inputs validation */}
                    <VerifyCodeInputs
                        verifyCode={verifyCode}
                        setVerifySuccess={setVerifySuccess}
                        setModalOpen={setModalOpen}

                    />
                </FormBlock>

                <ContentBlock>

                    <ContainerText>
                        Didn’t recieve the code?
                    </ContainerText>
                    <ContainerLink
                    // onPress={() => {

                    // }}
                    >
                        <ContainerLinkText>
                            Request again
                        </ContainerLinkText>
                    </ContainerLink>
                    <ContainerText>
                        Correct code 0000
                    </ContainerText>
                </ContentBlock>

            </Container>
        </>

    )
}

export default VerifyScreen;