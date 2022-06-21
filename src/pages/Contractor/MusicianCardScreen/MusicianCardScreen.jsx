import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import { useRef } from 'react';
import { useRoute } from '@react-navigation/native';
import { apiMocks } from '@/api/mock/apiMocks'
// Helpers
import { isKeyboardShown } from '@/components/helpers/isKeyboardShown'
// Components
import CardScreen from '@/components/CardScreen'

// Styles
import styled from 'styled-components/native';
import C from '@/res/colors'

const Container = styled.View`
height: 100%;
width: 100%;
background-color: ${C.white};
padding-bottom: 80px;
`;

const MusicianCardScreen = () => {
    const route = useRoute();
    const { musicianId } = route.params;

    const scrollViewRef = useRef(null)
    const scrollTop = () => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo({ y: 0, animated: false })
        }
    }
    if (musicianId) {
        scrollTop()
    }

    const musicianData = apiMocks.MusicianMockApi.find((musician) => musician.id === Number(musicianId) && musician);

    return (
        <>
            <SafeAreaView
                ref={scrollViewRef}
            >
                <StatusBar
                    barStyle={'light-content'}
                    hidden={false}
                    backgroundColor="transparent"
                    translucent={true}
                />
                <Container>

                    <CardScreen
                        isMusician={true}
                        data={musicianData}
                    />

                </Container>
            </SafeAreaView>

        </>

    )
}

export default MusicianCardScreen;