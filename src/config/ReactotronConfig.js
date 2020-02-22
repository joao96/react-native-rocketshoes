import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure({ name: 'Rocketshoes' })
    .useReactNative()
    .use(reactotronRedux())
    .use(sagaPlugin())
    .setAsyncStorageHandler(AsyncStorage)

    .connect();

  tron.clear();
  console.tron = tron;
}
