import React from 'react';
// import {createStackNavigator} from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

//screens
// HomePage, comingSoonPage
import HomePage from "../screens/HomePage.js"
import ComingSoon from "../screens/ComingSoon.js"


const Stack = createNativeStackNavigator();

export const AppStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="main" component={HomePage} options={{ headerShown: false }} />
            <Stack.Screen name="ComingSoon" component={ComingSoon} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};