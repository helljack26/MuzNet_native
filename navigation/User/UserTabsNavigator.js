import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Pages stack
import UserStackNavigator from './UserStackNavigator';
// Import header
import HeaderUser from '@/components/HeaderUser/HeaderUser';
// Navbar
import NavbarItem from '@/components/NavigationBar/NavigationBar'
// Navbar
import AddPage from '@/pages/UserTapbar/AddPage/AddPage'
import FavoritePage from '@/pages/UserTapbar/FavoritePage/FavoritePage'
import HomePageUser from '@/pages/User/HomePageUser/HomePageUser.jsx';

const Tab = createBottomTabNavigator();

const UserTabsNavigator = ({ navigation }) => {

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        showLabel: false,
        // Header
        headerShown: true,
        headerTitle: () => (<HeaderUser navigation={navigation} />),
        // Navigation Bar
        tabBarStyle: { width: '100%', justifyContent: 'space-between', alignItems: 'center' },
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => {
          return <NavbarItem tabName={route.name} focused={focused} />
        },
      })}  >
      <Tab.Screen name="Объявления User" component={HomePageUser} initialParams={{ reload: false }} />
      <Tab.Screen name="Создать User" component={AddPage} />
      <Tab.Screen name="Избранное User" component={FavoritePage} />
      <Tab.Screen
        options={{
          tabBarButton: () => null,
          tabBarVisible: false,
        }}
        name="ScreenUser" component={UserStackNavigator} />
    </Tab.Navigator>
  );
};

export default UserTabsNavigator;
