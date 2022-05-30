import React from 'react'

import { NavigationContainer } from '@react-navigation/native';

// import TabsNavigator from './navigation/TabsNavigator';
import Router from './navigation/Router';
// Fonts
import { useFonts } from "@use-expo/font";
import AppLoading from 'expo-app-loading';

const customFonts = {
    MulishLight: require('./assets/fonts/Mulish-Light.otf'),
    MulishRegular: require('./assets/fonts/Mulish-Regular.otf'),
    MulishMedium: require('./assets/fonts/Mulish-Medium.otf'),
    MulishSemiBold: require('./assets/fonts/Mulish-SemiBold.otf'),
    MulishExtraBold: require('./assets/fonts/Mulish-ExtraBold.otf'),
    MulishBold: require('./assets/fonts/Mulish-Bold.otf'),
    MulishBlack: require('./assets/fonts/Mulish-Black.otf'),
};
export default function App() {
    const [isLoaded] = useFonts(customFonts);
    if (!isLoaded) {
        return <AppLoading />;
    }

    return (
        <NavigationContainer>
            <Router />
        </NavigationContainer>)
}
