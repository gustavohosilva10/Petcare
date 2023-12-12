import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_API = 'https://4830-179-251-105-27.ngrok-free.app'; 

export default {
  login: async (email, password) => {
    try {
      const response = await axios.post(`${BASE_API}/api/login`, {
        email: email,
        password: password,
      });

      if (response.data.token) {
        await AsyncStorage.setItem('token', token);

        return response.data;
      }  
      if (response.data.errors) {
        return { errors: response.data.errors };
      }

      if (response.data.error) {
        return { error: response.data.error };
      }
  
    } catch (error) {
      if (error.isAxiosError && error.response.status === 422) {
        return { errors: error.response.data.errors };
      } else {
        return 'Erro ao realizar o cadastro';
      }
    }
  },
  register: async (email, name, password, document, cellphone, birthdate) => {
    try {
      const data = {
        email: email,
        name: name,
        password: password,
        document: document,
        cellphone: cellphone,
        birth_date: birthdate
      }
  
      const response = await axios.post(`${BASE_API}/api/register`, data);
  
      if (response.data.message) {
        return response.data;
      } else if (response.data.errors) {
        return { errors: response.data.errors };
      }
  
    } catch (error) {
      if (error.isAxiosError && error.response.status === 422) {
        return { errors: error.response.data.errors };
      } else {
        return 'Erro ao realizar o cadastro';
      }
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
