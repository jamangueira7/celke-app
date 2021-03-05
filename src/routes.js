import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Orcamento from './pages/Orcamento';

export default function Routes () {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Orcamento" component={Orcamento} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
