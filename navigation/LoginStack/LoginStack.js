import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import LoginScreen from '../../src/pages/LoginScreen';

const Stack = createNativeStackNavigator();

export default function LoginStack() {
    return (
        <Stack.Navigator
            screenOptions={() => ({
                tabBarShowLabel: false,
                headerBackVisible: false,
                headerShown: false,
            })}
        >
            <Stack.Screen name="LoginScreen" component={LoginScreen} />

        </Stack.Navigator>)
}