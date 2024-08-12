import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: '#6200EE',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  navLinks: {
    flexDirection: 'row',
  },
  link: {
    color: 'white',
    fontSize: 16,
    marginLeft: 20,
  },
});

export default styles;
