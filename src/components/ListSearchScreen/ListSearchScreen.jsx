import React from 'react';

import { useState, useEffect } from 'react';

import { useNavigation, useRoute } from '@react-navigation/native';
// Components
import ListSearchInput from '@/components/ListSearchInput'
import AdsList from '@/components/AdsList'

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
import GoBack from '@components/Buttons/GoBack/GoBack';
const {
    Content,
    Header,
    ContentTitle,

    // Ads
    AdsContainer,
    AdsContainerHeader,
    AdsContainerHeaderTitle,

} = style;

const ListSearchScreen = observer(({ stackName }) => {
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
    console.log("🚀 ~ file: ListSearchScreen.jsx ~ line 83 ~ ListSearchScreen ~ stackName", stackName)

    const isToContractorWelcomeHash = isContractor ? 'ContractorWelcomeScreen' : 'MusicianWelcomeScreen'
    const isContractorData = isContractor ? musicianList : vendorList

    return (
        <>
            <Content>
                {/* Header */}
                <Header>
                    <GoBack stackName={stackName} screenName={isToContractorWelcomeHash} />

                    <ContentTitle>
                        Search
                    </ContentTitle>

                </Header>

                <ListSearchInput
                    stackName={stackName}
                    searchText={searchText}
                    onChangeSearchText={onChangeSearchText}
                    initialFocusInput={initialFocusInput}
                />

                {/* Ads */}
                <AdsContainer>

                    {/* Ads header */}
                    {nothingWasFound === true && <AdsContainerHeader>
                        <AdsContainerHeaderTitle>
                            Nothing was found
                        </AdsContainerHeaderTitle>

                    </AdsContainerHeader>
                    }
                    {/* Ads container */}
                    <AdsList adsList={isContractorData} isForContractor={isContractor} />

                </AdsContainer>
            </Content>
        </>

    )
})

export default ListSearchScreen;