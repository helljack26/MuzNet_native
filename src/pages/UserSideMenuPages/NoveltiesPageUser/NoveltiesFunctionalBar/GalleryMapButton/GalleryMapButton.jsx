import C from '@/res/colors'
import F from '@/res/fonts'
import React from 'react';

import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { observer } from 'mobx-react-lite';
import { useCatalogApiStore } from '@/stores/CatalogApi';

const GalleryMapButton = observer(() => {
    const { isGallery, setGallery, setMap } = useCatalogApiStore();

    return (
        <View style={styles.filter_mobile}>
            {isGallery === false ?
                <TouchableOpacity
                    onPress={setGallery}
                    style={styles.button}>
                    <Text>Галерея</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity
                    onPress={setMap}
                    style={styles.button}>
                    <Text>На карте</Text>
                </TouchableOpacity>
            }
        </View >
    )
})

export default GalleryMapButton;

const styles = StyleSheet.create({
    filter_mobile: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: 'row',
        width: "100%",
        borderColor: 'black',
        borderWidth: 1,
        borderStyle: 'solid',
        marginTop: 23,
        backgroundColor: "white",
        borderRadius: 5
    },
    button: {
        width: "100%",
        height: 42,
        display: "flex",
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        fontSize: 14
    },
    border: {
        backgroundColor: 'black',
        width: 0.7,
        height: '100%'
    },
    filterBtn_number: {
        borderRadius: 24 / 2,
        width: 24,
        height: 24,
        textAlign: 'center',
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        backgroundColor: C.mainBlue,
        marginLeft: 13,
        paddingRight: 1,
        paddingTop: 5,
        fontFamily: F.medium,
        fontSize: 12
    }
});
