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

export default function SignupForm({Navigate}: SectionProps): JSX.Element {
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
    console.log("on press signup", user, password);
    console.log("navigation in signup---->", navigation)
  }

  return (
    <View>
      <Input
        placeholder={'Email11'}
        onChangeText={onChangeText}
        style={styles.input}
        secureTextEntry={false}
      />

      <View style={styles.verticalLine} />
      <Input
        placeholder={'Phone'}
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
      <CustomButton title="Signup" color="#fff" onPress={onPressLearnMore} backgroundColor="#728FCE" />

      {/* Social login */}

      {/* Signup */}
      <View style={{alignSelf: 'center'}}>
        <Text onPress={() => navigation.navigate('Login')}>Already have account?</Text>
      </View>
    </View>
  )
}
