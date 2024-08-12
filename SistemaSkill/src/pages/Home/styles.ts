import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  skillItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
  skillName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  skillLevel: {
    width: 50,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 5,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '100%',
  },
  saveButton: {
    color: 'white',
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  cancelButton: {
    color: 'white',
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
});

export default styles;
