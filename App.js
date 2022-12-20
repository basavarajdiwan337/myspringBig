import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Signin from './resource/Screens/Signin/index';
import PinEntry from './resource/Screens/PinEntry/index';
import ShopsPage from './resource/Screens/ShopsPage/index';
import Rewards from './resource/Screens/Rewards';
import Offers from './resource/Screens/Offers';
import Profile from './resource/Screens/Profile';
import Shop from './resource/Screens/Shop';
import Messages from './resource/Screens/Messages';
import RegistrationForm from './resource/Screens/RegistrationForm';
const Stack = createNativeStackNavigator();
const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor={'black'}
        barStyle={'light-content'}
      />
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="Signin" component={Signin} />
            <Stack.Screen name="PinEntry" component={PinEntry} />
            <Stack.Screen name="Shops" component={ShopsPage} />
            <Stack.Screen name="RegistrationForm" component={RegistrationForm} />
            <Stack.Screen name="Messages" component={Messages}/>
            <Stack.Screen name="Rewards" component={Rewards}/>
            <Stack.Screen name="Offers" component={Offers}/>
            <Stack.Screen name="Profile" component={Profile}/>
            <Stack.Screen name="Shop" component={Shop}/>
          </Stack.Navigator>
        </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'gray'
  },

});
