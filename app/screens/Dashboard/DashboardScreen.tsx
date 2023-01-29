import React, { useState, createContext } from 'react';
import type {PropsWithChildren} from 'react';
import {
  ScrollView,
  StyleSheet,
} from 'react-native';

import {
  Card,
  LoginForm
} from '../../components/index';
import { Dashboard } from '../../components/dashboard/index';

type SectionProps = PropsWithChildren<{
  navigation: Object
}>;


function DashboardScreen({ navigation }: SectionProps): JSX.Element {

  const Navigate = createContext(navigation);

  return (
    <ScrollView>
      <Navigate.Provider value={navigation}>
        <Card Child={Dashboard} Navigate={Navigate} />
      </Navigate.Provider>
    </ScrollView>
  )
}

export default DashboardScreen;
