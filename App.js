import { StyleSheet, Text, View, StatusBar } from 'react-native';
import NativeInput from './components/NativeInput';
import PropInput from './components/PropInput';
import MultiLine from './components/MultiLine';
import SwitchComp from './components/SwitchComp';
import LoginForm from './components/LoginForm';
import PracticeForm from './components/PracticeForm';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <NativeInput /> */}
      {/* <PropInput /> */}
      {/* <MultiLine /> */}
      {/* <SwitchComp /> */}
      <LoginForm />
      {/* <PracticeForm /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight
  },
});
