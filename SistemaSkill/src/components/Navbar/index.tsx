import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import styles from './styles';

// Defina o tipo das rotas
type RootStackParamList = {
  Home: undefined;
  Login: undefined;
};

const Navbar = () => {
  // Use `NavigationProp` com o tipo das rotas
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MyApp</Text>
      <View style={styles.navLinks}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.link}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Navbar;
