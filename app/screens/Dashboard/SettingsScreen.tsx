import React, { useState, createContext } from 'react';
import type {PropsWithChildren} from 'react';
import {
  ScrollView,
  StyleSheet,
} from 'react-native';

import {
  Card
} from '../../components/index';
import { Settings } from '../../components/dashboard/index';

type SectionProps = PropsWithChildren<{
  navigation: Object
}>;


function SettingsScreen({ navigation }: SectionProps): JSX.Element {

  const Navigate = createContext(navigation);

  return (
    <ScrollView>
      <Navigate.Provider value={navigation}>
        <Card Child={Settings} Navigate={Navigate} />
      </Navigate.Provider>
    </ScrollView>
  )
}

export default SettingsScreen;
