import React, {FC, memo} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getUser} from '../../services/store/profile/selectors';
import {User} from '../../services/store/profile/types';
import {AppState} from '../../services/store/types';
import profileActions from '../../services/store/profile/actions';
import Header from '../../components/header/Header';

const HeaderContainer: FC = () => {
  const select: User = useSelector<AppState, User>(getUser);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(profileActions.logout());
  };

  return (
    <Header
      username={select.username}
      avatarUrl={select.avatarUrl}
      onLogout={onLogout}
    />
  );
};

export default HeaderContainer;
