import { React, useCallback } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { backgroundColor, secondaryColor, terciaryColor, tittleForms } from '../../utils/colors';
import { txtWelcome, txtMyPets, txtNonePet, txtCategoys, txtTittleCardVaccine, txtSubTittleCardVaccine, txtTittleCardMedicament, txtSubiTittleCardMedicament } from '../../utils/text';
import { useFonts } from 'expo-font';
import FontLoader from '../components/FontLoader';
import CardAction from '../components/CardAction';

const HomeScreen = () => {

    return (
        <SafeAreaProvider>
            <FontLoader>
                <ScrollView>

                    <View style={styles.container}>
                        <View style={styles.titleContent}>
                            <Text style={styles.nameText}>{txtWelcome}</Text>
                        </View>

                        <Image
                            source={require('../../../assets/ImgHome.png')}
                            style={styles.image}
                            resizeMode="cover"
                        />

                        <View style={styles.titleContent}>
                            <Text style={styles.nameTitlePetText}>{txtMyPets}</Text>
                        </View>

                        <View style={styles.noPetContainer}>
                            <Text>{txtNonePet}</Text>
                            <Image
                                source={require('../../../assets/IconHome.png')}
                                style={styles.imageNonePet}
                                resizeMode="cover"
                            />
                        </View>

                        <View style={styles.titleContent}>
                            <Text style={styles.nameTitlePetText}>{txtCategoys}</Text>
                        </View>

                        <View style={styles.cardContent}>
                            <CardAction image={require('../../../assets/IconVaccines.png')} tittle={txtTittleCardVaccine} subTittle={txtTittleCardVaccine} />
                            <CardAction image={require('../../../assets/IconVaccines.png')} tittle={txtTittleCardMedicament} subTittle={txtSubiTittleCardMedicament} />
                        </View>

                    </View>
                </ScrollView>

            </FontLoader>

        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: backgroundColor
    },
    titleContent: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        fontFamily: 'Lato-Regular',
        padding: 28,
    },
    nameText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        fontFamily: 'Lato-Regular',
        color: tittleForms
    },
    nameTitlePetText: {
        fontSize: 16,
        marginBottom: 20,
        fontFamily: 'Lato-Regular',
        color: tittleForms
    },
    image: {
        width: '100%',
        height: 194,
    },
    noPetContainer: {
        alignSelf: 'center'
    },
    imageNonePet: {
        height: 90,
        width: 90
    },
    cardContent: {
        marginHorizontal: 20,
        flex: 1
    }
});

export default HomeScreen;
