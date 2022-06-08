import React from 'react';
import { Dimensions } from 'react-native';
import { useState, useEffect } from 'react';

import { useNavigation, useRoute } from '@react-navigation/native';
// Components
import ListSearchInput from '@/components/ListSearchInput'
import AdsList from '@/components/AdsList'
// Helpers
import { isKeyboardShown } from '@/components/helpers/isKeyboardShown'
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
    Welcome,
    WelcomeImage,
    PromoteBtn,
    PromoteBtnText,

    // Map
    MapContainer,
    MapImage,
    MapContainerBlockBg,
    MapContainerBlock,
    MapTitle,
    MapLink,
    MapLinkText,
    // Ads
    AdsContainer,
    AdsContainerHeader,
    AdsContainerHeaderTitle,
    AdsContainerHeaderLink,
    AdsContainerHeaderLinkText,
} = style;

const MainScreen = observer(({ stackName, screenTitle }) => {
    const { musicianList, vendorList, setList } = useSearchApiStore();

    const navigation = useNavigation();

    const route = useRoute();

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setList(route.name);
        });
        return unsubscribe;
    }, [navigation]);

    const isKeyboardOpen = isKeyboardShown()
    const { windowHeight, windowWidth } = getWindowDimension()

    const [searchText, onChangeSearchText] = useState('');

    const isFilter = searchText.length > 0

    const compareLetterNumber = searchText.length
    useEffect(() => {
        // if (init > 0) {
        //     if (isFilter) {
        //         const newLocalData = localChooseData.map((item) => {
        //             const slicedItem = item.slice(0, compareLetterNumber).toLowerCase()
        //             if (slicedItem.includes(searchText.toLowerCase())) {
        //                 return item
        //             } else {
        //                 return
        //             }
        //         })
        //         setFilteredChooseData(newLocalData)
        //     } else {
        //         setFilteredChooseData(localChooseData)
        //     }
        // }

    }, [searchText]);
    const isContractor = stackName === 'ContractorStack'
    const stackForSwitch = isContractor ? 'MusicianStack' : 'ContractorStack'
    const screenForSwitch = isContractor ? 'MusicianWelcomeScreen' : 'ContractorWelcomeScreen'

    const isContractorData = isContractor ? musicianList : vendorList
    return (
        <Content>
            {/* Header */}
            <Header>

                <Welcome>
                    <WelcomeImage source={IMAGES.WelcomeTitle} resizeMode={'contain'} />
                </Welcome>

                <PromoteBtn
                    onPress={() => {
                        navigation.navigate(stackForSwitch, {
                            screen: screenForSwitch
                        });
                    }}
                >
                    <PromoteBtnText>
                        Promote my add
                    </PromoteBtnText>
                </PromoteBtn>

            </Header>

            <ListSearchInput searchText={searchText} onChangeSearchText={onChangeSearchText} />

            {/* Map container */}
            <MapContainer>
                <MapImage source={IMAGES.MapMain} resizeMode={'cover'} />

                <MapContainerBlockBg>
                    <MapShape width={'98%'} height={'100%'} />
                </MapContainerBlockBg>

                <MapContainerBlock>
                    <MapTitle>
                        Find
                    </MapTitle>
                    <MapTitle>
                        Nearby
                    </MapTitle>

                    <MapLink>
                        <MapLinkText>
                            Go to the map
                        </MapLinkText>
                    </MapLink>
                </MapContainerBlock>

            </MapContainer>

            {/* Ads */}
            <AdsContainer>

                {/* Ads header */}
                <AdsContainerHeader>
                    <AdsContainerHeaderTitle>{screenTitle}</AdsContainerHeaderTitle>

                    <AdsContainerHeaderLink
                    // onPress={() => {
                    //     navigation.navigate(stackName, {
                    //         screen: 'ListSearchScreen'
                    //     });
                    // }} 

                    >

                        <AdsContainerHeaderLinkText>
                            View all
                        </AdsContainerHeaderLinkText>

                    </AdsContainerHeaderLink>
                </AdsContainerHeader>

                {/* Ads container */}
                <AdsList adsList={isContractorData} isForContractor={isContractor} />

            </AdsContainer>
        </Content>
    )
})

export default MainScreen;