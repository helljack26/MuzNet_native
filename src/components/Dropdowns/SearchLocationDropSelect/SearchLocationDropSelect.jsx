import React from 'react';
import { Keyboard } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useEffect, useState } from 'react';
import { isKeyboardShown } from '@/components/helpers/isKeyboardShown';
import C from '@/res/colors'

// Images
import IMAGES from '@/res/images'

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

const SearchLocationDropSelect = observer(({ isResetAll, setParentShowOpenDrop, isCloseAllDropdown, setFilterLocation, placeholderText, existedLocation }) => {
    const navigation = useNavigation();
    // Store
    const { locationList, setLocationList } = useLocationAutocompleteApiStore();
    const jsLocationList = toJS(locationList)

    // Search input
    const [searchText, onChangeSearchText] = useState('');
    // Local selected location
    const [selectedLocation, setSelectedLocation] = useState('');

    const [inputFocus1, setInputFocus1] = useState(C.lightGray);
    const [isShiftInputLocationLabel, setShiftInputLocationLabel] = useState(false);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            if (existedLocation !== undefined) {
                setSelectedLocation(existedLocation)
                onChangeSearchText(existedLocation)
                setFilterLocation(existedLocation)
                setShiftInputLocationLabel(true)
            }
        });
        return unsubscribe;
    }, [navigation]);

    const [isOpenDropList, setOpenDropList] = useState(false)

    useEffect(() => {
        if (setParentShowOpenDrop !== undefined) {
            if (isOpenDropList === true) {
                setParentShowOpenDrop(true)
            } else {
                setParentShowOpenDrop(false)
            }
        }

    }, [isOpenDropList]);

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
                type: 'city'
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
        }
    }, [searchText.length, selectedLocation]);

    // If resetAll
    useEffect(() => {
        if (isResetAll === true) {
            setLocationList({
                inputValue: [],
                type: ''
            })
            onChangeSearchText('')
            setSelectedLocation('')
            setFilterLocation('')
            setShiftInputLocationLabel(false)
            setOpenDropList(false)
        }
        if (isResetAll === true && existedLocation !== undefined) {
            setSelectedLocation(existedLocation)
            onChangeSearchText(existedLocation)
            setFilterLocation(existedLocation)
            setShiftInputLocationLabel(true)

        }
    }, [isResetAll, existedLocation]);


    const onPressEnter = () => {
        if (jsLocationList.length > 0) {
            setLocationList([])
            const item = jsLocationList[0]
            onChangeSearchText(item)
            setSelectedLocation(item)
            setFilterLocation(item)
            Keyboard.dismiss()
        } else {
            onChangeSearchText('')
            Keyboard.dismiss()
        }
    }

    useEffect(() => {
        if (isCloseAllDropdown === true) {
            onChangeSearchText('')

            Keyboard.dismiss()

        }
    }, [isCloseAllDropdown]);
    return (

        <Container>
            {/* Search Input */}
            <FormInputBlock       >
                <FormInputContainer
                    style={{
                        marginLeft: 16,
                        marginRight: 16,
                        backgroundColor: C.white,
                        borderRadius: 6,
                        elevation: isOpenDropList === true ? 5 : inputFocus1 === C.black ? 5 : 0,
                    }}
                >
                    <FormInput
                        onSubmitEditing={() => onPressEnter()}
                        inputLabel={isShiftInputLocationLabel}
                        selectionColor={C.lightGray}
                        placeholderTextColor={C.sBlack}
                        placeholder={placeholderText}
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
                        const isFirst = key === 0
                        return (item !== undefined && <Item
                            style={{
                                backgroundColor: isFirst === true ? C.lightGray : C.white,
                            }}
                            key={key}
                            onPress={() => {
                                onChangeSearchText(item)
                                setSelectedLocation(item)
                                setFilterLocation(item)
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

    );
});

export default SearchLocationDropSelect;