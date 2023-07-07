import React, {FC, createContext} from 'react';
import {Provider} from 'react-redux';
import Services from './src/services';
import {config} from './src/services/config';
import Main from './src/Main';

const services: Services = new Services(config);
const ServicesContext = createContext<Services | null>(null);

const App: FC = () => {
  return (
    <Provider store={services.store}>
      <ServicesContext.Provider value={services}>
        <Main />
      </ServicesContext.Provider>
    </Provider>
  );
};

export default App;
