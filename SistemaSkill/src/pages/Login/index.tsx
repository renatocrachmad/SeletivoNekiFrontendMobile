import React, { useState } from 'react';
import { View, TextInput, Button, Text, TouchableOpacity } from 'react-native';
import { login } from '../../services/api';
import { saveLogin, clearLogin, getLogin } from '../../utils/storage';
import styles from './styles';
import { CheckBox } from 'react-native-elements';

const LoginPage = ({ navigation }: any) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [savePassword, setSavePassword] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await login(username, password);
      if (response.data.success) {
        if (savePassword) {
          await saveLogin(username, password);
        } else {
          await clearLogin();
        }
        navigation.navigate('Home');
      } else {
        alert('Login falhou');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const toggleSavePassword = () => {
    setSavePassword(!savePassword);
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
      <TouchableOpacity onPress={toggleSecureTextEntry}>
        <Text style={styles.togglePassword}>Mostrar/Ocultar Senha</Text>
      </TouchableOpacity>
      <View style={styles.checkboxContainer}>
        <CheckBox checked={savePassword} onPress={toggleSavePassword} />
        <Text style={styles.label}>Salvar Senha</Text>
      </View>
      <Button title="Entrar" onPress={handleLogin} />
      <Button title="Cadastrar-se" onPress={() => navigation.navigate('Cadastro')} />
    </View>
  );
};

export default LoginPage;
