import React, {FC} from 'react';
import {useSelector} from 'react-redux';

import {Header} from '../../components';
import {useAppDispatch} from '../../store';
import {getUser, logout, User} from '../../store/profile';

const HeaderContainer: FC = () => {
  const select: User = useSelector(getUser);
  const dispatch = useAppDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return <Header username={select.username} avatarUrl={select.avatarUrl} onLogout={onLogout} />;
};

export default HeaderContainer;
