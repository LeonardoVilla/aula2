import SimpleLoginForm from '@/components/SimpleLoginForm';
import { StyleSheet, View } from 'react-native';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <SimpleLoginForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
