import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_API = 'https://empresasenegociosmei.com.br'; //'https://empresasenegociosmei.com.br';

export default {
  login: async (email, password) => {
    try {
      const response = await axios.post(`${BASE_API}/api/login`, {
        email: email,
        password: password,
      });

      if (response.data && response.data.token) {
        const token = response.data.token;
        await AsyncStorage.setItem('token', token);
        return response.data;
      } else if (response.data && response.data.error) {
        return response.data.error;
      }
    } catch (error) {
      return 'Ocorreu um erro desconhecido durante o login.';
    }
  },
  register: async (name, document, cellphone, email, password) => {
    try {
      const data = {
        name: name,
        document: document,
        cellphone: cellphone,
        email: email,
        password: password
      }

      const response = await axios.post(`${BASE_API}/api/register`, data);
      
      if (response.data && response.data.token) {
        const token = response.data.token;

        await AsyncStorage.setItem('token', token);
        return response.data; 

      } else if (response.data && response.data.error) {
        return response.data.error;
      } 
    } catch (error) {
      return 'Ocorreu um erro desconhecido durante o registro.';
    }
  },
  recoveryPassword: async (email) => {
    try {
      const response = await axios.post(`${BASE_API}/api/password/email`, {
        email: email,
      });

      return 'Tudo certo, confira seu e-mail para efetuar a troca de sua senha.';

    } catch (error) {
      return 'Ocorreu um erro desconhecido durante o login.';
    }
  },
  getUser: async () => {
    try {
      const token = await AsyncStorage.getItem('token');

      const response = await axios.get(`${BASE_API}/api/getUser`, { headers: { "Authorization": `Bearer ${token}` } });
      return response.data;

    } catch (error) {
      return 'Ocorreu um erro desconhecido durante o processo.';
    }
  }
};
