import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// User
import LoginPage from '../../src/pages/FormPage/LoginPage/LoginPage.jsx';
import RegistrationPage from '../../src/pages/FormPage/RegistrationPage/RegistrationPage.jsx';
import ForgetPasswordPage from '../../src/pages/FormPage/ForgetPasswordPage/ForgetPasswordPage.jsx';

import CardPageUser from '../../src/pages/User/CardPageUser/CardPageUser.jsx';
// Categories 
import ApartmentsPageUser from '../../src/pages/User/ApartmentsPageUser/ApartmentsPageUser.jsx'
import ApartmentsComplexPageUser from '../../src/pages/User/ApartmentsComplexPageUser/ApartmentsComplexPageUser.jsx'
import HousesPageUser from '../../src/pages/User/HousesPageUser/HousesPageUser.jsx'
import PlotsPageUser from '../../src/pages/User/PlotsPageUser/PlotsPageUser.jsx'
import CommercePageUser from '../../src/pages/User/CommercePageUser/CommercePageUser.jsx'
import RentPageUser from '../../src/pages/User/RentPageUser/RentPageUser.jsx'
// Side navigation
import NewsPageUser from '../../src/pages/UserSideMenuPages/NewsPageUser/NewsPageUser';
import NewsCardUser from '../../src/pages/UserSideMenuPages/NewsCardUser/NewsCardUser';
import NoveltiesPageUser from '../../src/pages/UserSideMenuPages/NoveltiesPageUser/NoveltiesPageUser';
import ContactsPageUser from '../../src/pages/UserSideMenuPages/ContactsPageUser/ContactsPageUser';

const Stack = createNativeStackNavigator();

export default function UserStackNavigator() {
    return (
        <Stack.Navigator
            screenOptions={() => ({
                tabBarShowLabel: false,
                headerBackVisible: false,
                headerShown: false,
            })}
        >
            <Stack.Screen name="LoginPage" component={LoginPage} />
            <Stack.Screen name="RegistrationPage" component={RegistrationPage} />
            <Stack.Screen name="ForgetPasswordPage" component={ForgetPasswordPage} />

            <Stack.Screen name="CardPage" component={CardPageUser} />
            <Stack.Screen name="ApartmentsPage" component={ApartmentsPageUser} />
            <Stack.Screen name="ApartmentsComplexPage" component={ApartmentsComplexPageUser} />
            <Stack.Screen name="HousesPage" component={HousesPageUser} />
            <Stack.Screen name="PlotsPage" component={PlotsPageUser} />
            <Stack.Screen name="CommercePage" component={CommercePageUser} />
            <Stack.Screen name="RentPage" component={RentPageUser} />
            {/* Side navigation */}
            <Stack.Screen name="NewsPageUser" component={NewsPageUser} />
            <Stack.Screen name="NewsCardUser" component={NewsCardUser} />
            <Stack.Screen name="NoveltiesPage" component={NoveltiesPageUser} />
            <Stack.Screen name="ContactsPage" component={ContactsPageUser} />

        </Stack.Navigator>)
}