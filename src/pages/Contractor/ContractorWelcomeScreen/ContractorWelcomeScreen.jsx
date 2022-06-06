import React from 'react';
import { StatusBar } from 'react-native';
import { useState, useEffect } from 'react';

// import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { getWindowDimension } from '@/components/helpers/getWindowDimension'

import MainScreen from '@/components/MainScreen'
import TapbarMenu from '@/components/Buttons/TapbarMenu'

// Images
import IMAGES from '@/res/images'
const {

} = IMAGES;
// Styles

import styled from 'styled-components/native';
import C from '@/res/colors'
import F from '@/res/fonts'

const Container = styled.View`
height: 100%;
width: 100%;
background-color: ${C.black};
`;
const Content = styled.ScrollView`
padding: 0px 20px;
width: 100%;
`;

const ContractorWelcomeScreen = () => {
    const navigation = useNavigation();

    const { windowHeight, windowWidth } = getWindowDimension()
    console.log("🚀 ~ file: ContractorWelcomeScreen.jsx ~ line 44 ~ ContractorWelcomeScreen ~ windowHeight", windowHeight)

    return (
        <>
            <StatusBar
                barStyle={'dark-content'}
                hidden={false}
                backgroundColor="transparent"
                translucent={true}
            />

            {/* Image */}
            <Container
            // style={{
            //     height: windowHeight,
            // }}
            >
                <Content>
                    <MainScreen />
                </Content>

                <TapbarMenu />
            </Container>
        </>

    )
}

export default ContractorWelcomeScreen;