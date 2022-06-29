import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ContractorWelcomeScreen from '../../src/pages/Contractor/ContractorWelcomeScreen';
import ContractorListSearchScreen from '../../src/pages/Contractor/ContractorListSearchScreen';
import ContractorMapSearchScreen from '../../src/pages/Contractor/ContractorMapSearchScreen';
import MusicianCardScreen from '../../src/pages/Contractor/MusicianCardScreen';
import ContractorMessagesScreen from '../../src/pages/Contractor/ContractorMessagesScreen';
import ContractorChatScreen from '../../src/pages/Contractor/ContractorChatScreen';
import ContractorAccountScreen from '../../src/pages/Contractor/ContractorAccountScreen';

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
            <Stack.Screen
                options={{
                    transitionConfig: () => ({
                        transitionSpec: {
                            duration: 0,
                            timing: Animated.timing,
                            easing: Easing.step0,
                        },
                    }),
                }}
                name="ContractorWelcomeScreen" component={ContractorWelcomeScreen} />
            <Stack.Screen name="ContractorListSearchScreen" component={ContractorListSearchScreen} />
            <Stack.Screen name="ContractorMapSearchScreen" component={ContractorMapSearchScreen} />
            <Stack.Screen name="MusicianCardScreen" component={MusicianCardScreen} />
            <Stack.Screen name="ContractorMessagesScreen" component={ContractorMessagesScreen} />
            <Stack.Screen name="ContractorChatScreen" component={ContractorChatScreen} />
            <Stack.Screen name="ContractorAccountScreen" component={ContractorAccountScreen} />
        </Stack.Navigator>)
}