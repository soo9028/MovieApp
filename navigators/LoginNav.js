import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screen_login/Login';


const Stack = createStackNavigator();

export default LoginNav=()=>{
    return(
            <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Login" component={Login}></Stack.Screen>
        </Stack.Navigator>
    );
}