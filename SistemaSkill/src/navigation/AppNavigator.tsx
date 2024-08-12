import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from '../pages/Login';
import CadastroPage from '../pages/Cadastro';
import HomePage from '../pages/Home';
import { useAuth } from '../utils/storage';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Stack.Navigator>
      {isLoggedIn ? (
        <>
          <Stack.Screen name="Home" component={HomePage} />
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="Cadastro" component={CadastroPage} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;
