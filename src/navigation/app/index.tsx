import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
    createNativeStackNavigator,
    NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import Dashboard from '../../screens/app/dashoard';
import routes from '../routes';
// import routes from '@navigation/routes';
// import Dashboard from '@screens/app/dashoard';

const Stack = createNativeStackNavigator();
const screenOptions: NativeStackNavigationOptions = {
    headerShown: false,
    animation: 'flip',
};


const AppNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={screenOptions}
            initialRouteName={routes.app.dashboard}>
            <Stack.Screen name={routes.app.dashboard}
                component={Dashboard} />
        </Stack.Navigator>
    )
}

export default AppNavigator

const styles = StyleSheet.create({})