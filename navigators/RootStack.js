import React from 'react';
import { Colors } from './../components/style';
const { primary, tertiary } = Colors;

// React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens 
import Login from './../screens/Login';
import Signup from './../screens/Signup';
import Welcome from '../screens/Welcome';

const Stack = createStackNavigator();

const RootStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: 'transparent', 
                    },
                    headerTintColor: tertiary,
                    headerTransparent: true,
                    headerTitle: '',
                    headerLeftContainerStyle: {
                        paddingLeft: 20,
                    },
                }}
                initialRouteName="Login"
            >
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen options={{ headerTintColor: primary }} name='Welcome' component={Welcome} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootStack;
