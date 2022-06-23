import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MusicianWelcomeScreen from '../../src/pages/Musician/MusicianWelcomeScreen';
import MusicianListSearchScreen from '../../src/pages/Musician/MusicianListSearchScreen';
import MusicianMapSearchScreen from '../../src/pages/Musician/MusicianMapSearchScreen';
import ContractorAdsCardScreen from '../../src/pages/Musician/ContractorAdsCardScreen';
import MusicianMessagesScreen from '../../src/pages/Musician/MusicianMessagesScreen';

const Stack = createNativeStackNavigator();

export default function MusicianStack() {
    return (
        <Stack.Navigator
            screenOptions={() => ({
                tabBarShowLabel: false,
                headerBackVisible: false,
                headerShown: false,
            })}
        >
            <Stack.Screen name="MusicianWelcomeScreen" component={MusicianWelcomeScreen} />
            <Stack.Screen name="MusicianListSearchScreen" component={MusicianListSearchScreen} />
            <Stack.Screen name="MusicianMapSearchScreen" component={MusicianMapSearchScreen} />
            <Stack.Screen name="ContractorAdsCardScreen" component={ContractorAdsCardScreen} />
            <Stack.Screen name="MusicianMessagesScreen" component={MusicianMessagesScreen} />

        </Stack.Navigator>)
}