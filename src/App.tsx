import React, {FC} from 'react';
import {Provider} from 'react-redux';
import {NativeBaseProvider} from 'native-base';
import {SafeAreaView} from 'react-native';

import {store} from '@store';
import {services, ServicesContext} from '@services';
import Main from './Main';

const App: FC = () => {
  return (
    <Provider store={store}>
      <ServicesContext.Provider value={services}>
        <NativeBaseProvider>
          {/* eslint-disable-next-line react-native/no-inline-styles */}
          <SafeAreaView style={{flex: 1}}>
            <Main />
          </SafeAreaView>
        </NativeBaseProvider>
      </ServicesContext.Provider>
    </Provider>
  );
};

export default App;
