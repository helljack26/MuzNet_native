import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList, useDrawerProgress, } from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';
import UserTabsNavigator from './UserTabsNavigator';

import { useCatalogApiStore } from '@/stores/CatalogApi';

const Drawer = createDrawerNavigator();
function CustomDrawerContent(props) {
    const { setCatalog } = useCatalogApiStore();

    const progress = useDrawerProgress();
    const translateX = Animated.interpolateNode(progress, {
        inputRange: [0, 1],
        outputRange: [-100, 0],
    });
    return (
        <DrawerContentScrollView {...props}>
            <Animated.View style={{ transform: [{ translateX }] }}>
                <DrawerItem label="Объявления" onPress={() => {
                    props.navigation.navigate('Объявления User'),
                        setCatalog('Объявления User')
                }
                } />
                <DrawerItem label="Новости" onPress={() => props.navigation.navigate('ScreenUser', { screen: "NewsPageUser" })} />
                <DrawerItem label="Новинки" onPress={() => props.navigation.navigate('ScreenUser', { screen: "NoveltiesPage" })} />
                <DrawerItem label="Контакты" onPress={() => props.navigation.navigate('ScreenUser', { screen: "ContactsPage" })} />
                <DrawerItem label="Выход" onPress={() => props.navigation.navigate("Start")} />
            </Animated.View>
        </DrawerContentScrollView>
    );
}
const UserSideMenuNavigator = () => {
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            useLegacyImplementation
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={() => ({
                itemStyle: { padding: 5 },
                headerBackVisible: false,
                headerShown: false,
            })}>
            <Drawer.Screen name="Stack" component={UserTabsNavigator} />
        </Drawer.Navigator>
    );
};

export default UserSideMenuNavigator;

