import React from 'react';
import { Dimensions } from "react-native";

import { useEffect } from 'react';
import { useState } from 'react';
import { isKeyboardShown } from '@/components/helpers/isKeyboardShown';
import C from '@/res/colors'

// Images
import IMAGES from '@/res/images'
const {
    SearchIcon,
    CrossBlackIcon,
    CrossGrayIcon
} = IMAGES;

// Styles
import { style } from './style'
const {
    // Search input
    Container,
    // Item
    ChosenBlock,
    DropContainer,
    Item,
    ItemText,
} = style;
// Mixin
import { M } from '@/res/mixin'
const {
    // Search input
    FormInputBlock,
    FormInputContainer,
    FormInput,
    FormInputLabel
} = M;


// Store
import { observer } from 'mobx-react-lite';
import { toJS } from "mobx";
import { useLocationAutocompleteApiStore } from '@/stores/LocationAutocompleteApi';

import { Text, View, Image } from 'react-native';

const SearchLocationDropSelect = observer(({ setFilterLocation }) => {
    const isKeyboardOpen = isKeyboardShown()
    // Store
    const { locationList, setLocationList } = useLocationAutocompleteApiStore();
    const jsLocationList = toJS(locationList)

    // Search input
    const [searchText, onChangeSearchText] = useState('');
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
            setLocationList(searchText)
        }
        if (searchText.length > 0) {
            setShiftInputLocationLabel(true)
        }
        if (searchText.length === 0) {
            setShiftInputLocationLabel(false)
            setLocationList([])
        }
    }, [searchText.length, selectedLocation]);



    return (
        <Container>
            {/* Search Input */}
            <FormInputBlock
                style={{
                    marginBottom: 200,
                }}
            >
                <FormInputContainer
                    style={{
                        marginLeft: 16,
                        marginRight: 16,
                        backgroundColor: C.white,
                        borderRadius: 6,
                        elevation: isOpenDropList === true ? 5 : 0,
                    }}
                >
                    <FormInput
                        inputLabel={isShiftInputLocationLabel}
                        selectionColor={C.lightGray}
                        placeholderTextColor={C.sBlack}
                        placeholder={'Any location'}
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
                    <FormInputLabel inputLabel={isShiftInputLocationLabel}>Location</FormInputLabel>
                </FormInputContainer>


            </FormInputBlock>

            {/* Choose block */}
            {isOpenDropList && <DropContainer
                nestedScrollEnabled={true}
                showsVerticalScrollIndicator={false}
                style={{
                    borderTopLeftRadius: isOpenDropList === true ? 0 : 6,
                    borderTopRightRadius: isOpenDropList === true ? 0 : 6,
                    elevation: 5
                }}
            >
                <ChosenBlock>
                    {jsLocationList.map((item, key) => {
                        return (item !== undefined && <Item key={key}
                            onPress={() => {
                                onChangeSearchText(item)
                                setSelectedLocation(item)
                                setFilterLocation(item)
                                setLocationList([])
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
    );
});

export default SearchLocationDropSelect;