import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import * as Location from 'expo-location';

export const getUserLocation = (userProfileLocation) => {

    const [profileCoords, setProfileCoords] = useState();
    const [userCurrentCoords, setUserCurrentCoords] = useState();

    useEffect(() => {


        Location.requestForegroundPermissionsAsync()
            .then((status) => {
                if (status !== 'granted') {
                    setUserCurrentCoords(undefined)
                    return;
                }
                Location.getCurrentPositionAsync({})
                    .then((location) => {
                        console.log("🚀 ~ file: getUserLocation.js ~ line 33 ~ .then ~ location", location)

                        const userProfileRegion = {
                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude,
                        }
                        return userProfileRegion
                    })
            }).then((result) => {
                console.log("🚀 ~ file: getUserLocation.js ~ line 30 ~ .then ~ result", result)
                if (userProfileLocation !== undefined) {
                    Location.geocodeAsync(userProfileLocation, true).
                        then((result) => {
                            if (result.length > 0) {
                                const userProfileRegion = {
                                    latitude: result[0].latitude,
                                    longitude: result[0].longitude,
                                }
                                setProfileCoords(userProfileRegion)
                            }
                        })
                }
            })
    }, [userProfileLocation]);

    useEffect(() => {

        if (userCurrentCoords !== undefined) {
            console.log("🚀 ~ file: getUserLocation.js ~ line 53 ~ getUserLocation ~ profileCoords", profileCoords)
            return userCurrentCoords
        } else {
            if (profileCoords !== undefined) {
                return profileCoords
            }
        }
    }, [profileCoords]);

}