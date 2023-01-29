/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Login, Signup } from '../screens/index';
import { Dashboard, QrScreen, Settings } from '../screens/Dashboard/index';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();

export function Navigator(): JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'Login'}}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{title: 'Signup'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export function AuthNavigator(): JSX.Element {

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Dashboard"
          component={Dashboard}
          options={{title: 'Dashboard'}}
        />
        <Tab.Screen
          name="QR"
          component={QrScreen}
          options={{title: 'QR'}}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{title: 'Settings'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
