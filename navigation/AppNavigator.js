import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScanScreen from '../screens/ScanScreen';
import ResultScreen from '../screens/ResultScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Scan">
        <Stack.Screen name="Scan" component={ScanScreen} options={{ title: 'QR Code Scanner' }} />
        <Stack.Screen name="Result" component={ResultScreen} options={{ title: 'Scan Result' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
