import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import TabBarMenu from './components/TabBarMenu';
const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false,
            }} initialRouteName="LoginPage">
                <Stack.Screen name="LoginPage" component={LoginPage}/>
                <Stack.Screen name="Menu" component={TabBarMenu}/>
                <Stack.Screen name="RegisterPage" component={RegisterPage}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

