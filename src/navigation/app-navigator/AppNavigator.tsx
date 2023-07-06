import {FC, memo} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthScreen from '../../screens/auth/AuthScreen';
import HomeScreen from '../../screens/home/HomeScreen';
import NewsItemScreen from '../../screens/news-item/NewsItemScreen';
import HeaderContainer from '../../containers/header/HeaderContainer';

const Stack = createNativeStackNavigator();

export interface AppNavigatorProps {
  isAuth: boolean;
}

const AppNavigator: FC<AppNavigatorProps> = ({isAuth}) => {
  const commonOptions: any = {
    headerRight: () => <HeaderContainer />,
    title: '',
  };

  return (
    <Stack.Navigator>
      {isAuth ? (
        <>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={commonOptions}
          />
          <Stack.Screen
            name="NewsItem"
            component={NewsItemScreen}
            options={commonOptions}
          />
        </>
      ) : (
        <Stack.Screen
          name="Auth"
          component={AuthScreen}
          options={{headerShown: false}}
        />
      )}
    </Stack.Navigator>
  );
};

export default memo(AppNavigator);
