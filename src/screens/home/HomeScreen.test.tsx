import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

import HomeScreen from './HomeScreen';
import {getNativeBaseProvider} from '@utils';

const mockStore = configureStore([]);

describe('Header container', () => {
  let store: any;
  let mockNavigation: any;

  beforeEach(() => {
    const initialState: any = {
      newsList: {
        isLoading: false,
        data: {
          items: [
            {
              id: '1',
              imageUrl: 'http://test.path',
              shortText: 'short text',
              title: 'title'
            },
            {
              id: '2',
              imageUrl: 'http://test.path2',
              shortText: 'short text 2',
              title: 'title 2'
            }
          ]
        }
      }
    };

    store = mockStore(initialState);
    mockNavigation = {navigate: jest.fn()};
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('отображает корректно', () => {
    render(
      getNativeBaseProvider(
        <Provider store={store}>
          <HomeScreen />
        </Provider>
      )
    );
  });

  it('отображает корректно список новостей', () => {
    const {getByTestId, getByText} = render(
      getNativeBaseProvider(
        <Provider store={store}>
          <HomeScreen />
        </Provider>
      )
    );

    expect(getByTestId('newsList')).toBeTruthy();
    expect(getByText('title')).toBeTruthy();
    expect(getByText('title 2')).toBeTruthy();
  });

  it('переходит на страницу новости при клине на нее', () => {
    const {getByText} = render(
      getNativeBaseProvider(
        <Provider store={store}>
          <HomeScreen navigation={mockNavigation} />
        </Provider>
      )
    );

    const newsItem = getByText('title');

    fireEvent.press(newsItem);

    expect(mockNavigation.navigate).toHaveBeenCalledWith('NewsItem', {id: '1'});
  });
});
