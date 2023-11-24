import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { backgroundColor } from '../../utils/colors';

export default function PreloadingScreen() {
    const navigation = useNavigation();
     useFocusEffect(() => {
        // Verifica se o usuário já completou a introdução anteriormente
        AsyncStorage.getItem('completedIntroduction').then(value => {
            if (value === 'completed') {
                navigation.navigate('Login');
            }else{
                navigation.navigate('Login');

                //navigation.navigate('Introduction');
            }
        });
    });
/*
    useFocusEffect(() => {
        // Verifica se o usuário já completou a introdução anteriormente
        AsyncStorage.getItem('token').then(value => {
            if (value) {
                navigation.navigate('Services');
            }else{
                navigation.navigate('Login');
            }
        });
    });
 */
    return (
        <View style={styles.container}>
            <Image
                source={require('../../../assets/splashPetcare.png')}
                style={styles.backgroundImage}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: backgroundColor,
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
    },
});
