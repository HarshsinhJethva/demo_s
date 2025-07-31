import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
    createNativeStackNavigator,
    NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import routes from '../routes';
import Login from '../../screens/auth/login';


const Stack = createNativeStackNavigator();
const screenOptions: NativeStackNavigationOptions = {
    headerShown: false,
    animation: 'flip',
};


const AuthNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={screenOptions}
            initialRouteName={routes.auth.login}>
            <Stack.Screen name={routes.auth.login}
                component={Login} />
        </Stack.Navigator>
    )
}

export default AuthNavigator

const styles = StyleSheet.create({})