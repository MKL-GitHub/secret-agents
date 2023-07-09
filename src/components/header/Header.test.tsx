import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import Header from './Header';
import {getNativeBaseProvider} from '@utils';

describe('Header component', () => {
  it('отображает корректно компонент', () => {
    render(getNativeBaseProvider(<Header />));
  });

  it('отображает корректный username', () => {
    const username = 'Mikhail';
    const {getByText} = render(getNativeBaseProvider(<Header username={username} />));
    const usernameElement = getByText(username);

    expect(usernameElement.props.children).toBe(username);
  });

  it('отображает корректный avatar', () => {
    const avatarUrl = 'https://images/avatar.png';
    const {getByTestId} = render(getNativeBaseProvider(<Header avatarUrl={avatarUrl} />));
    const avatarElement = getByTestId('avatar');

    expect(avatarElement.props.children[0].props.source.uri).toBe(avatarUrl);
  });

  it('вызывает callback при нажании на logout', () => {
    const onLogoutMock = jest.fn();
    const {getByTestId} = render(getNativeBaseProvider(<Header onLogout={onLogoutMock} />));
    const logoutElement = getByTestId('logout');

    expect(logoutElement).toBeDefined();
    fireEvent.press(logoutElement);
    expect(onLogoutMock).toHaveBeenCalledTimes(1);
  });
});
