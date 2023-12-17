import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { backgroundColor, terciaryColor } from '../../utils/colors';
import Back from '../../../assets/icons/Back.svg';
import CardAction from '../components/CardAction';
import { txtBack, txtMyInfo, txtUpdateInfo, txtCreatedAccount } from '../../utils/text';

export default function ProfileScreen() {
    const navigation = useNavigation();

    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.backButton}>
                    <Back width={17} height={17} />
                    <Text style={styles.backButtonText}>{txtBack}</Text>
                </TouchableOpacity>

                <View style={styles.contentContainer}>
                    <View style={styles.userInfoContainer}>
                        <Image
                            source={require('../../../assets/iconPat.png')}
                            style={styles.profileImage}
                        />
                        <View style={styles.userInfoText}>
                            <Text style={styles.userName}>Fulado e Sobrenome </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.subTittle}>

                    <Text style={styles.userSubtitle}>{txtCreatedAccount} 25/02/2022</Text>
                </View>

                <View style={styles.cardContent}>
                    <CardAction image={require('../../../assets/iconProf.png')} tittle={txtMyInfo} subTittle={txtUpdateInfo} />
                </View>
            </View>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: backgroundColor,
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
    },
    backButtonText: {
        color: terciaryColor,
        fontSize: 16,
        marginLeft: 5,
    },
    subTittle: {
        paddingHorizontal: 20,
    },
    contentContainer: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        marginTop: 30
    },
    userInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    userInfoText: {
        justifyContent: 'center',
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    userSubtitle: {
        fontSize: 14,
        color: terciaryColor,
    },
    cardContent: {
        paddingTop: 50,
        marginHorizontal: 20,
        flex: 1,
    },
});
