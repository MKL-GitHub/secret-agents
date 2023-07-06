import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import Header from './Header';

describe('Header component', () => {
  it('отображает корректно компонент', () => {
    render(<Header />);
  });

  it('отображает корректный username', () => {
    const username = 'Mikhail';
    const {getByTestId} = render(<Header username={username} />);
    const usernameElement = getByTestId('username');

    expect(usernameElement.props.children).toBe(username);
  });

  it('отображает корректный avatar', () => {
    const avatarUrl = 'https://images/avatar.png';
    const {getByTestId} = render(<Header avatarUrl={avatarUrl} />);
    const avatarElement = getByTestId('avatar');

    expect(avatarElement).toBeDefined();
    expect(avatarElement.props.source.uri).toBe(avatarUrl);
  });

  it('вызывает callback при нажании на logout', () => {
    const onLogoutMock = jest.fn();
    const {getByTestId} = render(<Header onLogout={onLogoutMock} />);
    const logoutElement = getByTestId('logout');

    expect(logoutElement).toBeDefined();
    fireEvent.press(logoutElement);
    expect(onLogoutMock).toHaveBeenCalledTimes(1);
  });
});
