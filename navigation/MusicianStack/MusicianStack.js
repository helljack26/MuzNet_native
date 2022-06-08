import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MusicianWelcomeScreen from '../../src/pages/Musician/MusicianWelcomeScreen';
import MusicianListSearchScreen from '../../src/pages/Musician/MusicianListSearchScreen';

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


        </Stack.Navigator>)
}