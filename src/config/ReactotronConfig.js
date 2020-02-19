import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage';

if (__DEV__) {
  // no host fica o IP da minha máquina
  const tron = Reactotron.configure({ name: 'Rocketshoes' })
    .useReactNative()
    .setAsyncStorageHandler(AsyncStorage)
    .connect();

  console.tron = tron;

  // dá um clear em toda a timeline quando dá refresh na aplicação
  tron.clear();
}
