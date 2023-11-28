import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import { Image } from 'react-native';

import { primaryColor, secondaryColor, menuColorInactive } from './src/utils/colors';

import PreloadingScreen from './src/screens/preloading';
import LoginScreen from './src/screens/login';
import RecoveryPasswordScreen from './src/screens/recoveryPassword';
import RegisterScreen from './src/screens/register';
import SuccessInfoScreen from './src/screens/components/SuccessInfo';
/* import IntroductionScreen from './src/screens/introduction';
import ServicesScreen from './src/screens/services';
import CartScreen from './src/screens/cart';
import CreateMEIScreen from './src/screens/createMei';
import CancelMEIScreen from './src/screens/cancelMei';
import RequestsScreen from './src/screens/requests';
import PixScreen from './src/screens/pix';
import ProfileScreen from './src/screens/profile';
import UpdatePasswordScreen  from './src/screens/updatePassword';
import UpdateProfileScreen from './src/screens/updateProfile';
import MovimentRequestScreen from './src/screens/movimentRequest';
import MovimentRequestMeiCancelScreen from './src/screens/movimentRequestMeiCancel';
import TaxReturnScreen from './src/screens/taxReturn';
import MovimentRequestTaxReturnScreen from './src/screens/movimentRequestTaxReturn';
import DebitConsultcreen from './src/screens/debitConsult';
import MovimentRequestDebitConsultScreen from './src/screens/movimentRequestDebitConsult';
import InstallmentsDebitsScreen from './src/screens/installmentsDebits'; 
import MovimentInstallmentsDebitsScreen from './src/screens/movimentInstallmentsDebits'; 
import CreditCardScreen from './src/screens/creditCard';
import ConsultHistoryScreen from './src/screens/consultHistory'; */

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


/* function HomeTabs() {

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: menuColorInactive,
        style: {
          height: 100,
          backgroundColor: secondaryColor,
          borderTopWidth: 0,
          elevation: 5,
        },
        labelStyle: {
          fontSize: 14,
        },
        tabStyle: {
          flexDirection: 'column', 
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: primaryColor,
        },
        indicatorStyle: {
          height: 3,
          backgroundColor: 'red',
        },
      }}
    >
      <Tab.Screen
        name="Services"
        component={ServicesScreen}
        options={{
          tabBarLabel: 'Serviços',
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('./assets/serv.png')}
              style={{
                width: 31,
                height: 25,
                resizeMode: 'cover',
                tintColor: focused ? 'white' : menuColorInactive,
              }}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="RequestsScreen"
        component={RequestsScreen}
        options={{
          tabBarLabel: 'Pedidos',
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('./assets/ped.png')}
              style={{
                width: 24,
                height: 24,
                resizeMode: 'cover',
                tintColor: focused ? 'white' : menuColorInactive,
              }}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          tabBarLabel: 'Carrinho',
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('./assets/cart.png')}
              style={{
                width: 24,
                height: 24,
                resizeMode: 'cover',
                tintColor: focused ? 'white' : menuColorInactive,
              }}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('./assets/perf.png')}
              style={{
                width: 24,
                height: 24,
                resizeMode: 'cover',
                tintColor: focused ? 'white' : menuColorInactive,
              }}
            />
          ),
          headerShown: false,
        }}
      />

    </Tab.Navigator>
  );
} */

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={PreloadingScreen}>
        <Stack.Screen name="Preloading" component={PreloadingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} /> 
        <Stack.Screen name="RecoveryPassword" component={RecoveryPasswordScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SuccessInfo" component={SuccessInfoScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}






