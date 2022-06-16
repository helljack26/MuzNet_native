import React from "react";
import { useState, useRef, useEffect } from 'react';
import { Keyboard } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
// Variables
import C from '@/res/colors'
import { S } from '@/res/strings'
// Components


import { getWindowDimension } from '@/components/helpers/getWindowDimension'

// Images
import IMAGES from '@/res/images'
const {
    GoBackIcon,
    FilterIcon
} = IMAGES;
// Styles
import { style } from './style'
const {
    // Search input
    SearchInputBlock,
    SearchInput,
    SearchIconBlock,
    SearchRemoveIcon,
    SearchRemoveIconBlock,
    OpacityBg,
    Container,
    // Item
    ChosenBlock,
    DropContainer,
    Item,
    ItemText,
    GoBackButton,
    FormInputContainer,
    FormInput,
} = style;

// Store
import { observer } from 'mobx-react-lite';
import { toJS } from "mobx";

import { useSearchApiStore } from '@/stores/SearchApi';
import { useLocationAutocompleteApiStore } from '@/stores/LocationAutocompleteApi';

const MapSearchInput = observer(({ stackName, searchText, toWelcomeScreenHash, onChangeSearchText, isMinOne, initialFocusInput }) => {
    const navigation = useNavigation();
    const route = useRoute();
    const { windowHeight, windowWidth } = getWindowDimension()

    const { isOpenFilters, setOpenFilters } = useSearchApiStore();

    // Store
    const { locationList, setLocationList } = useLocationAutocompleteApiStore();
    const jsLocationList = toJS(locationList)

    // Search input
    // const [searchText, onChangeSearchText] = useState('');
    // Local selected location
    const [selectedLocation, setSelectedLocation] = useState('');

    const [inputFocus1, setInputFocus1] = useState(C.lightGray);
    const [isShiftInputLocationLabel, setShiftInputLocationLabel] = useState(false);

    const [isOpenDropList, setOpenDropList] = useState(false);

    useEffect(() => {
        if (jsLocationList.length > 0) {
            setOpenDropList(true)
        } else {
            setOpenDropList(false)
        }
    }, [jsLocationList.length]);

    useEffect(() => {
        if (searchText.length > 0 && searchText !== selectedLocation) {
            setLocationList({
                inputValue: searchText,
                type: 'full'
            })
        }
        if (searchText.length > 0) {
            setShiftInputLocationLabel(true)
        }
        if (searchText.length === 0) {
            setShiftInputLocationLabel(false)
            setLocationList({
                inputValue: [],
                type: ''
            })
            setInputFocus1(C.lightGray)
        }
    }, [searchText.length, selectedLocation]);

    return (
        <>
            {isOpenDropList === true && <OpacityBg
                style={{
                    height: windowHeight,
                    width: windowWidth,
                }}
            ></OpacityBg>}
            <Container>
                {/* Search Input */}

                <FormInputContainer
                    zIndex={1010}

                    style={{
                        backgroundColor: C.white,
                        borderRadius: 6,
                        elevation: 15,
                    }} >
                    <GoBackButton
                        onPress={() => {
                            navigation.navigate(stackName, {
                                screen: toWelcomeScreenHash,
                            })
                        }}>
                        <GoBackIcon width={8} height={15} />
                    </GoBackButton>

                    {/* Filters button */}
                    <SearchRemoveIconBlock
                        onPress={() => {
                            setOpenFilters(true)
                        }}
                    >
                        <SearchRemoveIcon>
                            <FilterIcon width={15} height={15} />
                        </SearchRemoveIcon>
                    </SearchRemoveIconBlock>
                    <FormInput
                        inputLabel={isShiftInputLocationLabel}
                        selectionColor={C.lightGray}
                        placeholderTextColor={'#8E8E93'}
                        placeholder={'Nearby'}
                        cursorColor={C.inputCursor}
                        onFocus={() => { setInputFocus1(C.black) }}
                        onBlur={() => { setInputFocus1(C.lightGray) }}
                        onChangeText={onChangeSearchText}
                        value={searchText}
                        style={{
                            borderColor: inputFocus1,
                            borderWidth: 1,
                            color: C.black,
                            overflow: 'hidden',
                            backgroundColor: C.white,
                            borderBottomWidth: isOpenDropList === true ? 0 : 1,
                            borderBottomLeftRadius: isOpenDropList === true ? 0 : 6,
                            borderBottomRightRadius: isOpenDropList === true ? 0 : 6,
                        }}
                    />
                </FormInputContainer>

                {/* Choose block */}
                {isOpenDropList && <DropContainer
                    nestedScrollEnabled={true}
                    showsVerticalScrollIndicator={false}
                    style={{
                        borderTopLeftRadius: isOpenDropList === true ? 0 : 6,
                        borderTopRightRadius: isOpenDropList === true ? 0 : 6,
                        elevation: 15
                    }}
                >
                    <ChosenBlock>
                        {jsLocationList.map((item, key) => {
                            return (item !== undefined && <Item
                                zIndex={2000}
                                key={key}
                                onPress={() => {
                                    onChangeSearchText(item)
                                    setSelectedLocation(item)
                                    setLocationList([])
                                    Keyboard.dismiss()
                                }}
                            >
                                <ItemText>
                                    {item}
                                </ItemText>

                            </Item>)
                        })}
                    </ChosenBlock>

                </DropContainer>}
            </Container>
        </>

    );
})

export default MapSearchInput;