import 'react-native-gesture-handler';
import React from 'react';

import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';
import { StatusBar } from 'react-native';
import store from './redux';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <>
      <StatusBar backgroundColor="#ff3647" />
      <Provider store={store}>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
        <FlashMessage position="bottom" />
      </Provider>
    </>
  );
};

export default App;
