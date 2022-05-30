import C from '@/res/colors'
import F from '@/res/fonts'
import React from 'react';
import { useEffect } from 'react';

import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { observer } from 'mobx-react-lite';
import { useCatalogApiStore } from '@/stores/CatalogApi';
import PageLocation from '@/components/helpers/pageLocation'

const AdsButtonsObjectComplex = observer(() => {
    const { title } = PageLocation();
    const { isSingle, setSingleObject, setComplex } = useCatalogApiStore();

    const singleClass = isSingle === true ? styles.active : styles.default;
    const complexClass = isSingle === false ? styles.active : styles.default;

    const complexButtonText = title === 'Квартиры' ? 'Жилые комплексы' : 'Коттеджные поселки'
    const isApartment = title === 'Квартиры'

    return (
        <View style={styles.filter_mobile}>
            <TouchableOpacity
                onPress={() => setSingleObject(isApartment)}
                style={singleClass}>
                <Text style={{ color: isSingle ? 'white' : C.mainBlack }}
                >{title}</Text>
            </TouchableOpacity>

            <View style={styles.border}></View>

            <TouchableOpacity
                onPress={() => setComplex(isApartment)}
                style={complexClass}>
                <Text style={{ color: !isSingle ? 'white' : C.mainBlack }}
                >{complexButtonText}</Text>
            </TouchableOpacity>

        </View >
    )
})

export default AdsButtonsObjectComplex;

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
        marginTop: 22,
        marginBottom: 12,
        overflow: 'hidden',
        backgroundColor: "white",
        borderRadius: 5
    },
    default: {
        width: "50%",
        height: 42,
        display: "flex",
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        fontSize: 14,
        backgroundColor: "white",
    },
    active: {
        backgroundColor: C.mainBlue,
        width: "50%",
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
