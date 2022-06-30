import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Animated, Keyboard, View, Pressable, KeyboardAvoidingView, Platform } from 'react-native';
import { useForm, Controller } from "react-hook-form";
// Components

// Images
import IMAGES from '@/res/images'
const {
    GoBackIcon,

} = IMAGES;

// Styles
import { style } from './style'
const {
    Header,
    HeaderClose,
    HeaderTitle,
} = style;

const AccountsTabHeader = ({ tabName, setOpenTabs, onPress }) => {

    return (<Header >
        <HeaderClose
            onPress={() => {
                setOpenTabs({
                    tabName: tabName,
                    isOpen: false
                })
                onPress(false)
            }}
        >
            <GoBackIcon width={12} height={21} />
        </HeaderClose>

        <HeaderTitle>
            {tabName}
        </HeaderTitle>
    </Header>
    )
}

export default AccountsTabHeader;

