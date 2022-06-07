import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ContractorWelcomeScreen from '../../src/pages/Contractor/ContractorWelcomeScreen';

const Stack = createNativeStackNavigator();

export default function ContractorStack() {
    return (
        <Stack.Navigator
            screenOptions={() => ({
                tabBarShowLabel: false,
                headerBackVisible: false,
                headerShown: false,
            })}
        >
            <Stack.Screen name="ContractorWelcomeScreen" component={ContractorWelcomeScreen} />


        </Stack.Navigator>)
}