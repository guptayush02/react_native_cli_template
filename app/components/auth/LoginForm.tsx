/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
*/

import React, { useState, useContext } from 'react';
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
import { Input, CustomButton } from '../index';

type SectionProps = PropsWithChildren<{
  Navigate: any
}>;

const styles = StyleSheet.create({
  verticalLine: {
    height: 20
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5
  }
})

export default function LoginForm({Navigate}: SectionProps): JSX.Element {
  const [user, setUser] = useState(String);
  const [password, setPassword] = useState(String);
  const navigation:any = useContext(Navigate);

  const onChangeText = (value:string) => {
    setUser(value);
  }

  const onChangePassword = (value: string) => {
    setPassword(value)
  }

  const onPressLearnMore = () => {
    console.log("on press login", user, password);
    navigation.navigate("Dashboard");
  }

  return (
    <View>
      <Input
        placeholder={'Email/Phone'}
        onChangeText={onChangeText}
        style={styles.input}
        secureTextEntry={false}
      />

      <View style={styles.verticalLine} />
      <Input
        placeholder={'Password'}
        onChangeText={onChangePassword}
        style={styles.input}
        secureTextEntry={true}
      />

      <View style={styles.verticalLine} />
      <CustomButton title="Login" color="#fff" onPress={onPressLearnMore} backgroundColor="#728FCE" />

      {/* Social login */}

      {/* <View style={styles.verticalLine} /> */}
      {/* Signup */}
      <View style={{alignSelf: 'center'}}>
        <Text onPress={() => navigation.navigate('Signup')}>Don't have account?</Text>
      </View>
    </View>
  )
}
