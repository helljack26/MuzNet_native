import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Pages stack
import HomePageRealtor from '../../src/pages/Realtor/HomePageRealtor/HomePageRealtor.jsx';
import RealtorStackNavigator from './RealtorStackNavigator';
// Import header
import HeaderRealtor from '@/components/HeaderRealtor/HeaderRealtor';
// Navbar
import NavbarItem from '@/components/NavigationBar/NavigationBar'
// Navbar
import AddPageRealtor from '@/pages/RealtorTapbar/AddPageRealtor/AddPageRealtor'
import FavoritePageRealtor from '@/pages/RealtorTapbar/FavoritePageRealtor/FavoritePageRealtor'
import RealtorCollectionsStackNavigator from './RealtorCollectionsStackNavigator'
import ChatPageRealtor from '@/pages/RealtorTapbar/ChatPageRealtor/ChatPageRealtor'

const Tab = createBottomTabNavigator();

const RealtorTabsNavigator = ({ navigation }) => {

	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarShowLabel: false,
				showLabel: false,
				// Header
				headerShown: true,
				headerTitle: () => (<HeaderRealtor navigation={navigation} />),
				// Navigation Bar
				tabBarStyle: { paddingLeft: 10, justifyContent: 'space-between', alignItems: 'center' },
				tabBarIcon: ({ focused }) => {
					return <NavbarItem tabName={route.name} focused={focused} />
				},
			})}  >

			<Tab.Screen name="Объявления Realtor" component={HomePageRealtor} initialParams={{ reload: false }} />
			<Tab.Screen name="Избранное Realtor" component={FavoritePageRealtor} />
			<Tab.Screen name="Создать Realtor" component={AddPageRealtor} />
			<Tab.Screen name="Подборки Realtor" component={RealtorCollectionsStackNavigator} />
			<Tab.Screen name="Чаты Realtor" component={ChatPageRealtor} />
			<Tab.Screen
				options={{
					tabBarButton: () => null,
					tabBarVisible: false,
				}}
				name="ScreenRealtor" component={RealtorStackNavigator} />
		</Tab.Navigator>
	);
};

export default RealtorTabsNavigator;
