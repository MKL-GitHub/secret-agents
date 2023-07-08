import React, {FC} from 'react';
import {Provider} from 'react-redux';

import {store} from './store';
import {services, ServicesContext} from './services';
import Main from './Main';

const App: FC = () => {
  return (
    <Provider store={store}>
      <ServicesContext.Provider value={services}>
        <Main />
      </ServicesContext.Provider>
    </Provider>
  );
};

export default App;
