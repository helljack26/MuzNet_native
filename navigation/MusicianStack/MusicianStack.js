import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MusicianWelcomeScreen from '../../src/pages/Musician/MusicianWelcomeScreen';

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


        </Stack.Navigator>)
}