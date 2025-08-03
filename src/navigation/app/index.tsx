import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import routes from '@navigation/routes';
import Dashboard from '@screens/app/dashoard';
import tabs from './tabs';


const Stack = createNativeStackNavigator();
const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  animation: 'flip',
};

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={screenOptions}
      initialRouteName={routes.app.tabs}
    >
      <Stack.Screen name={routes.app.tabs} component={tabs} />
    </Stack.Navigator>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
