import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import { Image } from 'react-native';

import { primaryColor, secondaryColor, menuColorInactive, terciaryColor, backgroundColor } from './src/utils/colors';

import PreloadingScreen from './src/screens/preloading';
import LoginScreen from './src/screens/login';
import RecoveryPasswordScreen from './src/screens/recoveryPassword';
import RegisterScreen from './src/screens/register';
import SuccessInfoScreen from './src/screens/components/SuccessInfo';
import IntroductionScreen from './src/screens/introduction';
import HomeScreen from './src/screens/home';
import ProfileScreen from './src/screens/profile';

/*import ServicesScreen from './src/screens/services';
import CartScreen from './src/screens/cart';
import CreateMEIScreen from './src/screens/createMei';
import CancelMEIScreen from './src/screens/cancelMei';
import RequestsScreen from './src/screens/requests';
import PixScreen from './src/screens/pix';
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
import ButtomTab from './src/screens/components/ButtomTab';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


 function HomeTabs() {
  const [isProfileTabFocused, setProfileTabFocus] = useState(false);
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: terciaryColor,
        inactiveTintColor: terciaryColor,
        tabBarVisible: isProfileTabFocused,
        style: {
          height: 130,
          backgroundColor: secondaryColor,
          borderTopWidth: 0,
          elevation: 2,
        },
        labelStyle: {
          fontSize: 16,
        },
        tabStyle: {
          flexDirection: 'column', 
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: backgroundColor,
        },
      }}
    >
      <Tab.Screen
        name="Home1"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('./assets/Group.png')}
              style={{
                width: 22,
                height: 22,
                resizeMode: 'cover',
              }}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Home2"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Novo Pet',
          tabBarIcon: ({ focused }) => (
            <ButtomTab  style={{ paddingTop: 25 }}/>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileScreen}
        options={({ route }) => ({
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('./assets/iconHome2.png')}
              style={{
                width: 22,
                height: 22,
                resizeMode: 'cover',
              }}
            />
          ),
          headerShown: false,
        })}
        listeners={({ navigation, route }) => ({
          focus: () => {
            setProfileTabFocus(true);
          },
          blur: () => {
            setProfileTabFocus(false);
          },
        })}
      />
     
    </Tab.Navigator>
  );
} 

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={PreloadingScreen}>
        <Stack.Screen name="Preloading" component={PreloadingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} /> 
        <Stack.Screen name="RecoveryPassword" component={RecoveryPasswordScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SuccessInfo" component={SuccessInfoScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Introduction" component={IntroductionScreen} options={{ headerShown: false }} /> 
        <Stack.Screen name="Home" component={HomeTabs} options={{ headerShown: false }} /> 
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}






