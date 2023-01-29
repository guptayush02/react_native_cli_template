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

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  placeholder: string;
  style: Object;
  onChangeText: (val:string) => void;
  secureTextEntry: boolean
}>;

export default function Input({placeholder, onChangeText, style, secureTextEntry}: SectionProps): JSX.Element {
  return (
    <View>
      <TextInput
        style={style}
        placeholder={placeholder}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  )
}
