import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Realtor
import CardPageRealtor from '../../src/pages/Realtor/CardPageRealtor/CardPageRealtor.jsx';
// Categories 
import ApartmentsPageRealtor from '../../src/pages/Realtor/ApartmentsPageRealtor/ApartmentsPageRealtor.jsx'
import ApartmentsComplexPageRealtor from '../../src/pages/Realtor/ApartmentsComplexPageRealtor/ApartmentsComplexPageRealtor.jsx'
import ApartmentsComplexPlanPageRealtor from '../../src/pages/Realtor/ApartmentsComplexPlanPageRealtor/ApartmentsComplexPlanPageRealtor.jsx'
import HousesPageRealtor from '../../src/pages/Realtor/HousesPageRealtor/HousesPageRealtor.jsx'
import PlotsPageRealtor from '../../src/pages/Realtor/PlotsPageRealtor/PlotsPageRealtor.jsx'
import CommercePageRealtor from '../../src/pages/Realtor/CommercePageRealtor/CommercePageRealtor.jsx'
import RentPageRealtor from '../../src/pages/Realtor/RentPageRealtor/RentPageRealtor.jsx'
// Side navigation
import NewsPageRealtor from '../../src/pages/RealtorSideMenuPages/NewsPageRealtor/NewsPageRealtor';
import NewsCardRealtor from '../../src/pages/RealtorSideMenuPages/NewsCardRealtor/NewsCardRealtor';
import NoveltiesPageRealtor from '../../src/pages/RealtorSideMenuPages/NoveltiesPageRealtor/NoveltiesPageRealtor';
import ContactsPageRealtor from '../../src/pages/RealtorSideMenuPages/ContactsPageRealtor/ContactsPageRealtor';

import RealtorAccount from '../../src/pages/Accounts/RealtorAccount';
import ClientAccount from '../../src/pages/Accounts/ClientAccount';

const Stack = createNativeStackNavigator();

export default function RealtorStackNavigator() {
    return (
        <Stack.Navigator
            screenOptions={() => ({
                tabBarShowLabel: false,
                headerBackVisible: false,
                headerShown: false,
            })}>
            <Stack.Screen name="ApartmentsPageRealtor" component={ApartmentsPageRealtor} />
            <Stack.Screen name="ApartmentsComplexPageRealtor" component={ApartmentsComplexPageRealtor} />
            <Stack.Screen name="ApartmentsComplexPlanPageRealtor" component={ApartmentsComplexPlanPageRealtor} />
            <Stack.Screen name="HousesPageRealtor" component={HousesPageRealtor} />
            <Stack.Screen name="PlotsPageRealtor" component={PlotsPageRealtor} />
            <Stack.Screen name="CommercePageRealtor" component={CommercePageRealtor} />
            <Stack.Screen name="RentPageRealtor" component={RentPageRealtor} />
            {/* Side navigation */}
            <Stack.Screen name="NewsPageRealtor" component={NewsPageRealtor} />
            <Stack.Screen name="NewsCardRealtor" component={NewsCardRealtor} />
            <Stack.Screen name="NoveltiesPageRealtor" component={NoveltiesPageRealtor} />
            <Stack.Screen name="ContactsPageRealtor" component={ContactsPageRealtor} />
            <Stack.Screen name="CardPageRealtor" component={CardPageRealtor} />
            {/* Account */}
            <Stack.Screen name="RealtorAccountPage" component={RealtorAccount} />
            <Stack.Screen name="ClientAccountPage" component={ClientAccount} />

        </Stack.Navigator>
    )
}