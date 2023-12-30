import { React, useCallback, useState, useEffect } from 'react';

import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { backgroundColor, terciaryColor, secondaryColor, primaryColor } from '../../utils/colors';
import Back from '../../../assets/icons/Back.svg';
import CardAction from '../components/CardAction';
import { txtBack, txtUpdateProfileTitle, txtEmail, txtName, txtDocument, txtCellphone, txtSave, txtNotValidForm } from '../../utils/text';
import { useFonts } from 'expo-font';
import FontLoader from '../components/FontLoader';
import { useFocusEffect } from '@react-navigation/native';
import Api from '../../api';
import GenericInput from '../components/GenericInput';
import { maskCPF, maskPhoneNumber, maskBirthDate } from '../../utils/masks';
import ErrorMessageModal from '../../screens/components/ErrorMessageModal';
import RowInputs from '../../screens/components/RowInputs';
import SuccessInfo from '../components/SuccessInfo';

export default function UpdateProfileScreen() {
    const navigation = useNavigation();

    const [name, setName] = useState('');
    const [document, setDocument] = useState('');
    const [cellphone, setCellphone] = useState('');
    const [email, setEmail] = useState('');
    const [info, setInfo] = useState(false);
    const [message, setMessage] = useState('');
    const [isErrorModalVisible, setIsErrorModalVisible] = useState(false);
    const [isSplashVisible, setIsSplashVisible] = useState(true);
    const [isSuccess, setIsSuccess] = useState(true);

    const goBack = () => {
        navigation.navigate('Home1');
    };

    const goData = () => {
        setInfo(true);
    }


    useFocusEffect(
        useCallback(() => {
            const UserData = async () => {
                try {
                    const response = await Api.getUser();

                    if (response && response.data.id) {
                        setName(response.data.name);
                        setDocument(response.data.document);
                        setCellphone(response.data.cellphone);
                        setEmail(response.data.email);
                    } else {
                        if (response && response.errors) {
                            setMessage(response.errors.join('\n'));
                            setIsErrorModalVisible(true);
                        }
                        if (response && response.error) {
                            setMessage(response.error);
                            setIsErrorModalVisible(true);
                        }
                    }
                } catch (error) {
                    setMessage('Erro ao carregar dados do usuário');
                    setIsErrorModalVisible(true);
                }
            };
            UserData();

        }, [])
    );

    const handleUpdate = async () => {
        if (!email || !name || !document || !cellphone) {
            setMessage(txtNotValidForm);
            setIsErrorModalVisible(true);
            return;
        }
         
        try {
            const response = await Api.updateUser(name,email,document,cellphone)
            if (response && response.message) {
                setMessage(response.message);
                setIsSuccess(true);
                setTimeout(() => {
                    setIsSuccess(false);
                }, 2000);
              } else {
                if (response && response.errors) {
                  setMessage(response.errors.join('\n'));
                  setIsErrorModalVisible(true);
                }
              }
        } catch (error) {
            setMessage('Erro ao realizar a atulização');
            setIsErrorModalVisible(true);
        }
    };

    useEffect(() => {
        if (!isSuccess) {
            navigation.replace('Profile');
        }
    }, [isSuccess, navigation]);

    return (
        <SafeAreaProvider>
            {isSplashVisible && (
                <SuccessInfo
                    textTop="Tudo certo!"
                    textBottom={message}
                />
            )}
            <View style={styles.container}>
                <TouchableOpacity onPress={goBack} style={styles.backButton}>
                    <Back width={17} height={17} />
                    <Text style={styles.backButtonText}>{txtBack}</Text>
                </TouchableOpacity>

                <View style={styles.subTittle}>
                    <Text style={styles.userSubtitle}>{txtUpdateProfileTitle} </Text>
                </View>

                <View style={styles.content}>
                    <GenericInput
                        label={txtName}
                        placeholder="Nome"
                        value={name}
                        onChangeText={setName}
                        maxLength={60}
                        keyboardType="email-address"
                    />

                    <RowInputs>
                        <GenericInput
                            label={txtDocument}
                            placeholder="000.000.000-00"
                            value={document}
                            onChangeText={(text) => setDocument(maskCPF(text))}
                            maxLength={60}
                            keyboardType="numeric"
                        />

                        <GenericInput
                            label={txtCellphone}
                            placeholder="(00) 00000-0000"
                            value={cellphone}
                            onChangeText={(text) => setCellphone(maskPhoneNumber(text))}
                            maxLength={20}
                            keyboardType="numeric"
                        />
                    </RowInputs>

                    <GenericInput
                        label={txtEmail}
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                        maxLength={60}
                        keyboardType="email-address"
                    />

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.loginButton}
                            onPress={handleUpdate}
                        >
                            <Text style={styles.buttonText}>{txtSave}</Text>
                        </TouchableOpacity>

                    </View>
                </View>

                <ErrorMessageModal
                    visible={isErrorModalVisible}
                    message={message}
                    onClose={() => setIsErrorModalVisible(false)}
                />
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
        fontFamily: 'Lato-Regular',
    },
    subTittle: {
        paddingHorizontal: 20,
        padding: 10
    },
    contentContainer: {
        flexDirection: 'row',
        paddingHorizontal: 20,
    },
    userSubtitle: {
        fontSize: 24,
        fontFamily: 'Lato-Regular',
    },
    content: {
        flex: 1,
        marginHorizontal: 20,
        marginTop: 40
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginButton: {
        width: '90%',
        maxWidth: '100%',
        alignItems: 'center',
        backgroundColor: primaryColor,
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
