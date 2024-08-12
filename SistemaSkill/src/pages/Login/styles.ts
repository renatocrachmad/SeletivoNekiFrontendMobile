import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',  // Fundo claro para o container
  },
  input: {
    height: 40,
    borderColor: '#ccc',  // Cor da borda mais suave
    borderWidth: 1,
    borderRadius: 8,  // Bordas arredondadas
    marginBottom: 15,  // Margem inferior entre inputs
    paddingHorizontal: 10,
    backgroundColor: '#fff',  // Fundo branco para os inputs
  },
  togglePassword: {
    color: '#1e90ff',  // Azul suave para o texto de mostrar/ocultar senha
    marginBottom: 20,
    textAlign: 'right',  // Alinhamento à direita
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    margin: 8,
    color: '#333',  // Cor do texto mais escura
    fontSize: 16,  // Tamanho de fonte para a label
  },
});

export default styles;
