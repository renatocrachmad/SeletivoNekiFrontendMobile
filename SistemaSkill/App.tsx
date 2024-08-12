import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import Navbar from './src/components/Navbar';
import Footer from './src/components/Footer';

export default function App() {
  return (
    <NavigationContainer>
      <Navbar />
      <AppNavigator />
      <Footer />
    </NavigationContainer>
  );
}
