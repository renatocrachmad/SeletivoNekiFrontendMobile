import React, { useState } from 'react';
import { View, TextInput, Button, Text, TouchableOpacity } from 'react-native';
import { signup } from '../../services/api';
import styles from './styles';

const CadastroPage = ({ navigation }: any) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      alert('As senhas não coincidem.');
      return;
    }
    try {
      const response = await signup(username, password);
      if (response.data.success) {
        alert('Cadastro realizado com sucesso!');
        navigation.navigate('Login');
      } else {
        alert('Falha no cadastro.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const toggleSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Login"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={secureTextEntry}
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmar Senha"
        secureTextEntry={secureTextEntry}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <TouchableOpacity onPress={toggleSecureTextEntry}>
        <Text style={styles.togglePassword}>Mostrar/Ocultar Senhas</Text>
      </TouchableOpacity>
      <Button title="Salvar" onPress={handleSignup} />
    </View>
  );
};

export default CadastroPage;
