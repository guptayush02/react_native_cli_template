/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
*/

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TextInput
} from 'react-native';

type SectionProps = PropsWithChildren<{
  Child: any;
  Navigate: object
}>;

const styles = StyleSheet.create({
  sectionContainer: {
    padding: 8,
    marginTop: 20,
    borderWidth: 1
  }
})

export default function Card({Child, Navigate}: SectionProps): JSX.Element {
  return (
    <View style={styles.sectionContainer}>
      <Child Navigate={Navigate} />
    </View>
  )
}
