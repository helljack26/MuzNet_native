import React from 'react';

import { useState, useEffect } from 'react';

import { useNavigation, useRoute } from '@react-navigation/native';
// Components
import MapSearchInput from './MapSearchInput'
import AdsList from '@/components/AdsList'
import ExploreScreen from './ExploreScreen'

// Helpers
import { getWindowDimension } from '@/components/helpers/getWindowDimension'
// Store
import { observer } from 'mobx-react-lite';
import { useSearchApiStore } from '@/stores/SearchApi';
import C from '@/res/colors'

// Images
import IMAGES from '@/res/images'
const {

    MapShape
} = IMAGES;
// Styles
import { style } from './style'
const {
    Content,
    Header,
    ContentTitle,

    // Ads
    AdsContainer,
    AdsContainerHeader,
    AdsContainerHeaderTitle,

} = style;

const MapSearchScreen = observer(({ stackName }) => {
    const { musicianList, vendorList, setList, searchInList, nothingWasFound, setNothingWasFound } = useSearchApiStore();

    const navigation = useNavigation();

    const route = useRoute();

    const [searchText, onChangeSearchText] = useState('');
    const [initialFocusInput, setInitialFocusInput] = useState(false);

    // Set list
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setList(route.name);
        });
        return unsubscribe;
    }, [navigation]);

    // Set input from welcome screen
    useEffect(() => {
        if (route.params !== undefined) {
            if (route.params.searchText !== undefined) {
                if (searchText.length > 0 || route.params.searchText.length > 0) {
                    onChangeSearchText(route.params.searchText)
                    route.params.searchText = ''
                    setInitialFocusInput(true)
                }
            }
        } else {
            onChangeSearchText('')
        }
    }, [route.params]);

    // Set input from welcome screen
    useEffect(() => {
        if (searchText.length > 0) {
            searchInList(searchText, route.name);
        }
        if (searchText.length === 0) {
            setList(route.name);
            setNothingWasFound()
        }
    }, [searchText.length]);

    const isContractor = stackName === 'ContractorStack'

    const isToContractorWelcomeHash = isContractor ? 'ContractorWelcomeScreen' : 'MusicianWelcomeScreen'
    const isContractorData = isContractor ? musicianList : vendorList

    return (
        <>
            <Content>

                <MapSearchInput
                    stackName={stackName}
                    toWelcomeScreenHash={isToContractorWelcomeHash}
                    searchText={searchText}
                    onChangeSearchText={onChangeSearchText}
                    initialFocusInput={initialFocusInput}
                />

                {/* Ads */}
                <AdsContainer>

                    {/* Ads container */}
                    <ExploreScreen />
                    {/* <ExploreScreen adsList={isContractorData} isForContractor={isContractor} /> */}

                </AdsContainer>
            </Content>
        </>

    )
})

export default MapSearchScreen;