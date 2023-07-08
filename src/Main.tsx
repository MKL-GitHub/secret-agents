import React, {FC, useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import {AppNavigator} from './navigation';
import {Loading} from './components';
import {getIsAuthIsLoading, loadProfile} from './store/profile';
import {useAppDispatch} from './store';
import {getAuthParams} from './utils';

const Main: FC = () => {
  const [isLoadingParams, setIsLoadingParams] = useState<boolean>(true);
  const dispatch = useAppDispatch();

  const select = useSelector(getIsAuthIsLoading);

  useEffect(() => {
    const load = async () => {
      const params = await getAuthParams();
      params && (await dispatch(loadProfile(params)));
      setIsLoadingParams(false);
    };

    load();
  }, [dispatch]);

  return (
    <Loading isLoading={isLoadingParams || select.isLoading}>
      <NavigationContainer>
        <AppNavigator isAuth={select.isAuth} />
      </NavigationContainer>
    </Loading>
  );
};

export default Main;
