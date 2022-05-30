import * as React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartPage from '../src/pages/StartPage/StartPage';

import UserSideMenuNavigator from './User/UserSideMenuNavigator';
import RealtorSideMenuNavigator from './Realtor/RealtorSideMenuNavigator';

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
            <Stack.Screen name="Start" component={StartPage} />
            <Stack.Screen name="User" component={UserSideMenuNavigator} />
            <Stack.Screen name="Realtor" component={RealtorSideMenuNavigator} />
        </Stack.Navigator>)
}