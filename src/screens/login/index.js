import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { backgroundColor, primaryColor, terciaryColor, inputColor, secondaryColor, titleForms } from '../../utils/colors';
import { useNavigation } from '@react-navigation/native';
//import Api from '../../api';
//import ErrorMessageModal from '../../components/ErrorMessageModal';
import { ScrollView } from 'react-native';
import { txtTittle, txtSubtittle, txtRedefinitionPassword, txtRedefinition, txtAccountQuestion, txtRegister, txtEmail, txtPassword, txtLogin } from '../../utils/text';
import Eye from '../../../assets/icons/Eye.svg';


export default function LoginScreen() {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [buttonEnabled, setButtonEnabled] = useState(false);

    const [visiblePassword, setVisiblePassowrd] = useState(false);
    const [isErrorModalVisible, setIsErrorModalVisible] = useState(false);

    const handleLogin = async () => {
        /*         if (!email || !password) {
                    setMessage("Todos os campos são obrigatórios.");
                    setIsErrorModalVisible(true);
                    return;
                }
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
        // navigation.navigate('RecoveryPassword');
    };

    const handleSignUp = () => {
        // Navegar para a tela de cadastro
        // navigation.navigate('Register');
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
                        <Text style={styles.welcomeText}>{txtTittle}</Text>
                        <Text style={styles.appText}>{txtSubtittle}</Text>
                    </View>
                    <View style={styles.content}>

                        <View style={styles.labelContainer}>
                            <Text style={styles.label}>{txtEmail}</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Email"
                                maxLength={60}
                                keyboardType="email-address"
                                value={email}
                                onChangeText={setEmail}
                            />
                        </View>
                        <View style={styles.labelContainer}>
                            <Text style={styles.label}>{txtPassword}</Text>
                            <View style={styles.labelContainer}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Senha"
                                    maxLength={25}
                                    value={password}
                                    onChangeText={setPassword}
                                    secureTextEntry={!visiblePassword}
                                />
                                <TouchableOpacity
                                    activeOpacity={1}
                                    onPress={onPressEyePassword}
                                    style={styles.eyeIcon}
                                >
                                    <Eye width={17} height={17} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>

                        <TouchableOpacity
                            style={[styles.loginButton, { backgroundColor: buttonEnabled ? primaryColor : 'gray' }]}
                            onPress={() => buttonEnabled && handleLogin()}
                            disabled={!buttonEnabled}
                        >
                            <Text style={styles.buttonText}>Entrar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={handleForgotPassword}>
                            <Text style={styles.forgotPassword}>Esqueceu a senha? <Text style={styles.bold}>Redefinir</Text></Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={handleSignUp}>
                            <Text style={styles.signUp}>Não possui uma conta? <Text style={styles.bold}>Cadastre-se aqui</Text></Text>
                        </TouchableOpacity>

                        {/*   <ErrorMessageModal
                            visible={isErrorModalVisible}
                            message={message}
                            onClose={() => setIsErrorModalVisible(false)}
                        /> */}
                    </View>
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
        color: primaryColor
    },
    appText: {
        marginTop: 0,
        fontSize: 16,
        color: terciaryColor,
        textAlign: 'center',
        paddingBottom: 60
    },
    labelContainer: {
        marginBottom: 2,
    },
    label: {
        fontSize: 16,
        color: titleForms,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        height: 38,
        marginBottom: 15,
        flex: 1
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
    },
    bold: {
        fontWeight: 'bold',
        color: secondaryColor
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
    },
    eyeIcon: {
        position: 'absolute',
        right: 10,
        marginTop: 10
    },
});
