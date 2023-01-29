import React, { useState, createContext } from 'react';
import type {PropsWithChildren} from 'react';
import {
  ScrollView,
  StyleSheet,
} from 'react-native';

import {
  Card,
  LoginForm
} from '../components/index';

type SectionProps = PropsWithChildren<{
  navigation: Object
}>;


function LoginScreen({ navigation }: SectionProps): JSX.Element {

  const Navigate = createContext(navigation);

  return (
    <ScrollView>
      <Navigate.Provider value={navigation}>
        <Card Child={LoginForm} Navigate={Navigate} />
      </Navigate.Provider>
    </ScrollView>
  )
}

export default LoginScreen;
