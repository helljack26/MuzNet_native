import React from 'react';
import { Dimensions } from 'react-native';
import { useState, useEffect } from 'react';

import { useNavigation, useRoute } from '@react-navigation/native';
// Components
import AdsList from '@/components/AdsList'
// Helpers
import { isKeyboardShown } from '@/components/helpers/isKeyboardShown'
import { getWindowDimension } from '@/components/helpers/getWindowDimension'
// Store
import { observer } from 'mobx-react-lite';
import { useSearchApiStore } from '@/stores/SearchApi';
import C from '@/res/colors'
import { S } from '@/res/strings'

// Images
import IMAGES from '@/res/images'
const {
    SearchIcon,
    FilterIcon,
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
    // Search input
    SearchInputBlock,
    SearchInput,
    SearchIconBlock,
    SearchRemoveIconBlock,
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

const MainScreen = observer(() => {
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
    return (
        <Content>
            {/* Header */}
            <Header>

                <Welcome>
                    <WelcomeImage source={IMAGES.WelcomeTitle} resizeMode={'contain'} />
                </Welcome>

                <PromoteBtn>
                    <PromoteBtnText>
                        Promote my add
                    </PromoteBtnText>
                </PromoteBtn>

            </Header>

            {/* Search Input */}
            <SearchInputBlock>

                <SearchIconBlock>
                    <SearchIcon width={14} height={14} />
                </SearchIconBlock>

                <SearchRemoveIconBlock onPress={() => onChangeSearchText('')}   >
                    <FilterIcon width={15} height={15} />
                </SearchRemoveIconBlock>

                <SearchInput
                    cursorColor={C.inputCursor}
                    selectionColor={C.lightGray}
                    placeholder={'Search'}
                    keyboardType="default"
                    value={searchText}
                    onChangeText={onChangeSearchText}
                />
            </SearchInputBlock>

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
                    <AdsContainerHeaderTitle>Popular musician</AdsContainerHeaderTitle>

                    <AdsContainerHeaderLink
                        onPress={() => {
                            navigation.navigate('ContractorStack', {
                                screen: 'ListSearchScreen'
                            });
                        }} >
                        <AdsContainerHeaderLinkText>
                            View all
                        </AdsContainerHeaderLinkText>

                    </AdsContainerHeaderLink>
                </AdsContainerHeader>

                {/* Ads container */}
                <AdsList adsList={musicianList} isForContractor={true} />
            </AdsContainer>
        </Content>
    )
})

export default MainScreen;