import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useCatalogApiStore } from '@/stores/CatalogApi';

import IMAGES from '@/res/images'

const {
    HomeNavIcon,
    HomeActiveNavIcon,
    HeartDefault,
    HeartActive,
    AddNavIcon,
    AddActiveNavIcon,
    CollectionNavIcon,
    CollectionActiveNavIcon,
    ChatNavIcon,
    ChatActiveNavIcon,
} = IMAGES;

export default function NavbarItem({ focused, tabName }) {

    const navigation = useNavigation();

    let focuseCheck = focused;

    const splitedTabName = tabName.split(' ')[0]
    const splitedTabNameIsRealtor = tabName.split(' ')[1]

    const { setCatalog } = useCatalogApiStore();

    let icon
    const iconSize = 16;

    if (splitedTabName === 'Объявления') {
        icon = !focuseCheck ? <HomeNavIcon width={iconSize} height={iconSize} /> : <HomeActiveNavIcon width={iconSize} height={iconSize} />

    } else if (splitedTabName === 'Избранное') {
        icon = !focuseCheck ? <HeartDefault width={iconSize} height={iconSize} /> : <HeartActive width={iconSize} height={iconSize} />
    } else if (splitedTabName === 'Создать') {
        icon = !focuseCheck ? <AddNavIcon width={iconSize} height={iconSize} /> : <AddActiveNavIcon width={iconSize} height={iconSize} />
    } else if (splitedTabName === 'Подборки') {
        icon = !focuseCheck ? <CollectionNavIcon width={iconSize} height={iconSize} /> : <CollectionActiveNavIcon width={iconSize} height={iconSize} />
    } else if (splitedTabName === 'Чаты') {
        icon = !focuseCheck ? <ChatNavIcon width={iconSize} height={iconSize} /> : <ChatActiveNavIcon width={iconSize} height={iconSize} />
    }
    const resetCatalog = () => {
        return splitedTabNameIsRealtor === 'Realtor' ?
            (setCatalog('Объявления Realtor'), navigation.navigate("Объявления Realtor"))
            :
            (setCatalog('Объявления User'), navigation.navigate('Объявления User'))
    }

    return (splitedTabName === 'Объявления' ?
        <TouchableOpacity
            style={styles.navbarTab}
            onPress={() => resetCatalog()} >
            {icon}
            <Text numberOfLines={1}
                ellipsizeMode='clip'
                style={{ fontSize: 10, width: '15%', marginTop: 3, color: focuseCheck ? '#0072db' : '#222' }}>
                {splitedTabName}
            </Text>
        </TouchableOpacity>
        :
        <View
            style={styles.navbarTab}
        >
            {icon}
            <Text numberOfLines={1}
                ellipsizeMode='clip'
                style={{ fontSize: 10, width: '15%', marginTop: 3, color: focuseCheck ? '#0072db' : '#222' }}>
                {splitedTabName}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbarTab: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerNavbar_img: {
        width: 16,
        resizeMode: 'contain',
        height: 16,
    },
    active: {
        width: 16,
        height: 16,
        resizeMode: 'contain',
    }
});
