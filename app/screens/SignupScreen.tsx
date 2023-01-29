import React, { useState, createContext } from 'react';
import type {PropsWithChildren} from 'react';
import {
  ScrollView,
  StyleSheet,
} from 'react-native';

import {
  Card,
  SignupForm
} from '../components/index';

type SectionProps = PropsWithChildren<{
  navigation: Object
}>;


function SignupScreen({ navigation }: SectionProps): JSX.Element {

  const Navigate = createContext(navigation);
  return (
    <ScrollView>
      <Navigate.Provider value={navigation}>
        <Card Child={SignupForm} Navigate={Navigate} />
      </Navigate.Provider>
    </ScrollView>
  )
}

export default SignupScreen;
