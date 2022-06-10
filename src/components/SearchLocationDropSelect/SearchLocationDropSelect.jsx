import React from "react";
import { useState, useRef } from 'react';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
// Variables
import C from '@/res/colors'
import { S } from '@/res/strings'
// Images
import IMAGES from '@/res/images'
const {
    SearchIcon,
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
} = style;
import { M } from '@/res/mixin'
const {
    // Search input
    FormInput
} = M;

// Store
import { observer } from 'mobx-react-lite';
import { useSearchApiStore } from '@/stores/SearchApi';


import { Text, View, Image } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


// ios  AIzaSyDUzgQE2KTdwEMOaDd7iMgLXbX3jtTsaeE
// android  AIzaSyDuYVthbcuo4vQBDwdPDNW-zIJNaimxEWo

const GOOGLE_PLACES_API_KEY = 'YOUR_GOOGLE_API_KEY';

const SearchLocationDropSelect = () => {
    return (
        <GooglePlacesAutocomplete
            query={{
                key: GOOGLE_PLACES_API_KEY,
                language: 'en', // language of the results
            }}
            onPress={(data, details) => console.log(data, details)}
            textInputProps={{
                InputComp: FormInput,
                leftIcon: { type: 'font-awesome', name: 'chevron-left' },
                errorStyle: { color: 'red' },
            }}
        />
    );
};

export default SearchLocationDropSelect;