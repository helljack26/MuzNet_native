import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoardingScreen from '../src/pages/OnBoardingScreen';
import LoginStack from './LoginStack/LoginStack';
import SignUpStack from './SignUpStack/SignUpStack';

import ContractorStack from './ContractorStack/ContractorStack';

const Stack = createNativeStackNavigator();
export default function UserStackNavigator() {

    return (
        <Stack.Navigator
            screenOptions={() => ({
                itemStyle: { padding: 0 },
                tabBarShowLabel: false,
                headerBackVisible: false,
                // Header
                headerBackVisible: false,
                headerShown: false,
                tabBarStyle: { display: 'none' },
            })}
        >
            <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
            <Stack.Screen name="LoginStack" component={LoginStack} />
            <Stack.Screen name="SignUpStack" component={SignUpStack} />

            <Stack.Screen name="ContractorStack" component={ContractorStack} />
        </Stack.Navigator>)
}