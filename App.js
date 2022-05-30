import React from 'react'

import { NavigationContainer } from '@react-navigation/native';

// import TabsNavigator from './navigation/TabsNavigator';
import Router from './navigation/Router';
// Fonts
import { useFonts } from "@use-expo/font";
import AppLoading from 'expo-app-loading';

const customFonts = {
    RubikLight: require('./assets/fonts/Rubik-Light.otf'),
    RubikRegular: require('./assets/fonts/Rubik-Regular.otf'),
    RubikMedium: require('./assets/fonts/Rubik-Medium.otf'),
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
