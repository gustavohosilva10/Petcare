import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { backgroundColor, primaryColor, terciaryColor, inputColor, secondaryColor, tittleForms } from '../../utils/colors';
import { useNavigation } from '@react-navigation/native';
import Api from '../../api';
import ErrorMessageModal from '../../screens/components/ErrorMessageModal';
import RowInputs from '../../screens/components/RowInputs';
import { ScrollView } from 'react-native';
import {
    txtRegister, txtEmail, txtPassword, txtLogin, txtNotValidForm,
    txtName, txtDocument, txtCellphone, txtBirthDate, txtCreateAccount,
    txtInfoCreateAccount, txtBackLogin
} from '../../utils/text';
import PasswordInput from '../../screens/components/PasswordInput';
import GenericInput from '../components/GenericInput';
import { maskCPF, maskPhoneNumber, maskBirthDate } from '../../utils/masks';

export default function RegisterScreen() {
    const navigation = useNavigation();

    const [name, setName] = useState('');
    const [document, setDocument] = useState('');
    const [cellphone, setCellphone] = useState('');
    const [birthdate, setBirthDate] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [buttonEnabled, setButtonEnabled] = useState(false);

    const [visiblePassword, setVisiblePassowrd] = useState(false);
    const [isErrorModalVisible, setIsErrorModalVisible] = useState(false);

    const handleLogin = () => {
        if (!email || !name || !password || !document || !cellphone || !birthdate) {
            setMessage(txtNotValidForm);
            setIsErrorModalVisible(true);
            return;
        }
        /* 
       const response = await Api.login(email, password)
       if (response.token) {
           navigation.navigate('Services');
       } else {
           setMessage(response)
           setIsErrorModalVisible(true);
       } */

    };

    const onPressEyePassword = () => {
        setVisiblePassowrd(!visiblePassword);
    }

    const handleForgotPassword = () => {
        // Navegar para a tela de redefinição de senha
        navigation.navigate('RecoveryPassword');
    };

    const handleSign = () => {
        // Navegar para a tela de cadastro
        navigation.navigate('Login');
    };

    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.header}>
                        <Image
                            source={require('../../../assets/InitialPhoto.png')}
                            style={styles.image}
                        />
                        <Text style={styles.welcomeText}>{txtCreateAccount}</Text>
                        <Text style={styles.appText}>{txtInfoCreateAccount}</Text>
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
                            label={txtBirthDate}
                            placeholder="dd/mm/aaaa"
                            value={birthdate}
                            onChangeText={(text) => setBirthDate(maskBirthDate(text))}
                            maxLength={10}
                            keyboardType="numeric"
                        />
                        <PasswordInput
                            label={txtPassword}
                            placeholder="Senha"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={true}
                        />
                    </View>
                    <View style={styles.buttonContainer}>

                        <TouchableOpacity
                            style={styles.loginButton}
                            onPress={handleLogin}
                        >
                            <Text style={styles.buttonText}>{txtRegister}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={handleSign}>
                            <Text style={styles.signUp}>{txtBackLogin} <Text style={styles.bold}>{txtRegister}</Text></Text>
                        </TouchableOpacity>

                    </View>

                    <ErrorMessageModal
                        visible={isErrorModalVisible}
                        message={message}
                        onClose={() => setIsErrorModalVisible(false)}
                    />
                </ScrollView>
            </View>

        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: backgroundColor,
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 5
    },
    content: {
        flex: 1,
        marginHorizontal: 20
    },
    image: {
        width: 290,
        height: 290,
        resizeMode: 'cover',
        marginBottom: 2,
    },
    welcomeText: {
        fontSize: 24,
        marginBottom: 0,
        color: tittleForms
    },
    appText: {
        marginTop: 0,
        fontSize: 16,
        color: terciaryColor,
        textAlign: 'center',
        paddingBottom: 60
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
    forgotPassword: {
        marginTop: 10,
        color: terciaryColor,
    },
    signUp: {
        marginTop: 20,
        color: terciaryColor,
        paddingBottom:20
    },
    bold: {
        fontWeight: 'bold',
        color: primaryColor
    }
});
