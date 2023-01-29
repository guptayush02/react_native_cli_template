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
  Navigate: object
}>;

const styles = StyleSheet.create({
  sectionContainer: {
    padding: 8,
    marginTop: 20,
    borderWidth: 1
  }
})

export default function Dashboard({Navigate}: SectionProps): JSX.Element {
  return (
    <View>
      <Text>Dashboard</Text>
    </View>
  )
}
