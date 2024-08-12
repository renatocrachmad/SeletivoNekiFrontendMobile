import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, Modal, TextInput, TouchableOpacity } from 'react-native';
import { getSkills, addSkill, deleteSkill, updateSkill } from '../../services/api';
import styles from './styles';
import { Feather } from '@expo/vector-icons';

interface Skill {
  id: string;
  name: string;
  level: string;
}

const HomePage = () => {
  // Use a interface Skill para o estado
  const [skills, setSkills] = useState<Skill[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newSkill, setNewSkill] = useState('');
  const [newLevel, setNewLevel] = useState('');

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    const response = await getSkills();
    setSkills(response.data);
  };

  const handleAddSkill = async () => {
    await addSkill({ name: newSkill, level: newLevel });
    setModalVisible(false);
    fetchSkills();
  };

  const handleDeleteSkill = async (id: string) => {
    await deleteSkill(id);
    fetchSkills();
  };

  const handleUpdateSkill = async (id: string, level: string) => {
    await updateSkill(id, level);
    fetchSkills();
  };

  // Defina o tipo do item explicitamente
  const renderItem = ({ item }: { item: Skill }) => (
    <View style={styles.skillItem}>
      <Text style={styles.skillName}>{item.name}</Text>
      <TextInput
        style={styles.skillLevel}
        value={item.level}
        onChangeText={(text) => handleUpdateSkill(item.id, text)}
      />
      <Button title="Excluir" onPress={() => handleDeleteSkill(item.id)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={skills}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Button title="Adicionar Skill" onPress={() => setModalVisible(true)} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <TextInput
            style={styles.input}
            placeholder="Skill"
            value={newSkill}
            onChangeText={setNewSkill}
          />
          <TextInput
            style={styles.input}
            placeholder="Level"
            value={newLevel}
            onChangeText={setNewLevel}
          />
          <TouchableOpacity onPress={handleAddSkill}>
            <Text style={styles.saveButton}>Salvar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text style={styles.cancelButton}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default HomePage;
