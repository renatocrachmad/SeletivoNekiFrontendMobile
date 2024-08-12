import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

export const saveLogin = async (login: string, password: string) => {
  await AsyncStorage.setItem('@login', login);
  await AsyncStorage.setItem('@password', password);
};

export const getLogin = async () => {
  const login = await AsyncStorage.getItem('@login');
  const password = await AsyncStorage.getItem('@password');
  return { login, password };
};

export const clearLogin = async () => {
  await AsyncStorage.removeItem('@login');
  await AsyncStorage.removeItem('@password');
};

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLogin = async () => {
      const { login } = await getLogin();
      if (login) {
        setIsLoggedIn(true);
      }
    };
    checkLogin();
  }, []);

  return { isLoggedIn };
};
