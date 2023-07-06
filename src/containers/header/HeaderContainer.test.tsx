import React from 'react';
import {render} from '@testing-library/react-native';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import HeaderContainer from './HeaderContainer';

const mockStore = configureStore([]);

describe('Header container', () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({
      profile: {
        data: {},
      },
    });
  });

  it('отображает корректно', () => {
    render(
      <Provider store={store}>
        <HeaderContainer />
      </Provider>,
    );
  });
});
