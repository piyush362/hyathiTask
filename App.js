import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Router from './navigation/Router.js';
import { NavigationContainer } from '@react-navigation/native';

import HomePage from './screens/HomePage.js';
import { AppStack } from './navigation/AppStack';
import { AuthStack } from './navigation/AuthStack';
import { useState } from 'react';

export default function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      <NavigationContainer>
        {isLogin ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
