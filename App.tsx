import React from 'react';
import {View, StyleSheet, Button, Alert, Text} from 'react-native';
import ComingSoon from './src/Screens/ComingSoon';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
   <NavigationContainer>
     <Stack.Navigator>
        <Stack.Screen name="ComingSoon" component={ComingSoon}/>
     </Stack.Navigator>
   </NavigationContainer>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default App;