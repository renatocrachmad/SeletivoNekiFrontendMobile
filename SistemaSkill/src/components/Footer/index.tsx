import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>© 2024 MyApp. All Rights Reserved.</Text>
    </View>
  );
};

export default Footer;
