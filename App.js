import React, { useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthProvider } from './src/Contexts/authContext';

import Home from './src/Home';
import Treino from './src/Treino';
import Disputa from './src/Disputa';
import SignIn from './src/SignIn';


export default function App() {
  const Stack = createNativeStackNavigator();


  return (

    <NavigationContainer>
      <AuthProvider>

        <Stack.Navigator initialRouteName={ 'Home'}>
          <Stack.Screen options={{ headerShown: false }} name={'SignIn'} component={SignIn} />
          <Stack.Screen options={{ headerShown: false }} name={'Home'} component={Home} />
          <Stack.Screen options={{ headerShown: false }} name={'Disputa'} component={Disputa} />
          <Stack.Screen options={{
            headerShadowVisible: false,
            title: '',
            headerStyle: {
              backgroundColor: '#B22',

            },
            headerTintColor: "#fff"
          }} name={'Treino'} component={Treino} />
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>

  );
}


