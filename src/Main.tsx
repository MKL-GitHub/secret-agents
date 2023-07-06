import {FC, useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import AppNavigator from './navigation/app-navigator/AppNavigator';
import profileActions from './services/store/profile/actions';
import {getAuthParams} from './utils/getAuthParams';
import Loading from './components/loading/Loading';
import {getIsAuthIsLoading} from './services/store/profile/selectors';
import {NavigationContainer} from '@react-navigation/native';

const Main: FC = () => {
  const [isLoadingParams, setIsLoadingParams] = useState<boolean>(true);
  const dispatch = useDispatch();

  const select = useSelector(getIsAuthIsLoading);

  useEffect(() => {
    const load = async () => {
      const params = await getAuthParams();
      params && dispatch(profileActions.load(params));
      setIsLoadingParams(false);
    };

    load();
  }, []);

  return (
    <Loading isLoading={isLoadingParams || select.isLoading}>
      <NavigationContainer>
        <AppNavigator isAuth={select.isAuth} />
      </NavigationContainer>
    </Loading>
  );
};

export default Main;
