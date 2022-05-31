import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FirstSignUpScreen from '../../src/pages/SignUp/FirstSignUpScreen';
import SignUpScreen from '../../src/pages/SignUp/SignUpScreen';


const Stack = createNativeStackNavigator();

export default function SignUpStack() {
    return (
        <Stack.Navigator
            screenOptions={() => ({
                tabBarShowLabel: false,
                headerBackVisible: false,
                headerShown: false,
            })}
        >
            <Stack.Screen name="FirstSignUpScreen" component={FirstSignUpScreen} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />

        </Stack.Navigator>
    )
}