import {SafeAreaView, StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FieldScreen from './src/screens/FieldsScreen/index';
import WebScreen from './src/screens/WebScreen/index';
import ResultScreen from './src/screens/ResultScreen';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
      }}>
      <StatusBar
        animated={true}
        backgroundColor={'#003B4D'}
        barStyle={'light-content'}
      />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="fieldsScreen"
          screenOptions={{
            headerShown: false,
            animation: 'slide_from_right',
          }}>
          <Stack.Screen name={'fieldsScreen'} component={FieldScreen} />
          <Stack.Screen name={'webScreen'} component={WebScreen} />
          <Stack.Screen name={'ResultScreen'} component={ResultScreen} />

        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
