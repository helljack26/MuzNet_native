import React from 'react'
import { StyleSheet, TouchableOpacity, View, TextInput } from 'react-native';
import C from '@/res/colors'

import { useNavigation } from '@react-navigation/native';

import IMAGES from '@/res/images'
const { BurgerMenuIcon, SearchIcon, BellIcon, UserHeaderIcon } = IMAGES;

export default function HeaderUser() {
    const navigation = useNavigation();

    const [number, onChangeText] = React.useState(null);

    const NavigationDrawerStructure = ({ navigationProps }) => {
        const toggleDrawer = () => {
            navigationProps.toggleDrawer();
        };
        return (
            <TouchableOpacity
                style={styles.button}
                onPress={toggleDrawer}>
                <BurgerMenuIcon width={25} />
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.header}>
            <View style={styles.header_block}>
                <NavigationDrawerStructure navigationProps={navigation} />

                <View style={styles.input_block}>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={number}
                        placeholder="Поиск..."
                        keyboardType="default"
                    />
                    <TouchableOpacity style={styles.searchButton} onPress={() => { alert("you clicked me") }}>
                        <SearchIcon width={19} height={19} />
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonBar}>
                    <TouchableOpacity style={styles.bellButton} onPress={() => { alert("you clicked me") }}>
                        <BellIcon height={33} width={25} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.userIcon}
                        onPress={() => {
                            navigation.navigate('ScreenUser', {
                                screen: 'LoginPage'
                            });
                        }}
                    >
                        <UserHeaderIcon />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    // Header
    header: {
        marginTop: 10,
        height: 42,
        width: '100%',
        paddingBottom: 5,
        paddingRight: 10,
        // borderBottomColor: C.borderGray,
        // borderBottomWidth: 1.5,
    },

    header_block: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    input_block: {
        flex: 3,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 10,
    },
    button: {
        width: 25,
        height: 25,
        shadowColor: '#303838',
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 10,
        shadowOpacity: 0.35,
    },
    input: {
        width: '80%',
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5,
        borderColor: 'lightgray',
        borderWidth: 1.5,
        borderStyle: 'solid',
        height: 40,
        margin: 0,
        borderWidth: 1,
        padding: 10,
    },
    searchButton: {
        backgroundColor: '#0072db',
        width: 40,
        height: 40,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 0,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 0,
    },
    buttonBar: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    bellButton: {
        resizeMode: 'stretch',
        marginRight: 18,
        marginLeft: 8,
    },
    bellButtonImg: {
        width: 20,
        resizeMode: 'contain',
        height: 23
    },
    userIcon: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 25,
        height: 33,
    },
});
