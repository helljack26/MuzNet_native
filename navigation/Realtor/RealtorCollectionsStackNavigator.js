import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

{/* Collections screen stack */}
import CollectionsPageRealtor from '@/pages/RealtorTapbar/CollectionsPageRealtor/CollectionsPageRealtor'
import CollectionsCardPageRealtor from '@/pages/RealtorTapbar/CollectionsCardPageRealtor/CollectionsCardPageRealtor';

const Stack = createNativeStackNavigator();

export default function RealtorCollectionsStackNavigator() {
    return (
        <Stack.Navigator
            screenOptions={() => ({
                tabBarShowLabel: false,
                headerBackVisible: false,
                headerShown: false,
            })}>
            {/* Collections screen stack */}
            <Stack.Screen name="CollectionsPageRealtor" component={CollectionsPageRealtor} />
            <Stack.Screen name="CollectionsCardPageRealtor" component={CollectionsCardPageRealtor} />
        </Stack.Navigator>)
}