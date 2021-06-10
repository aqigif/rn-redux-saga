import 'react-native-gesture-handler';

import React from 'react';
import {View, Text} from 'react-native';

// Screens
import Root from './Root';

// Redux
import {Provider} from 'react-redux';
import {Store, StorePersist} from './src/Store/Store';
import {PersistGate} from 'redux-persist/lib/integration/react';

const App = () => {
  return (
    <Provider store={Store}>
      <Root />
    </Provider>
  );
};

export default App;
