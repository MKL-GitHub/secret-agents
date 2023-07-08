import React, {FC, memo} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HeaderContainer} from '../../containers';
import {AuthScreen, HomeScreen, NewsItemScreen} from '../../screens';

const Stack = createNativeStackNavigator();

export interface AppNavigatorProps {
  isAuth: boolean;
}

interface ScreenOptions {
  headerRight: () => React.ReactElement;
  title: string;
}

const AppNavigator: FC<AppNavigatorProps> = ({isAuth}) => {
  const commonOptions: ScreenOptions = {
    // eslint-disable-next-line react/no-unstable-nested-components
    headerRight: () => <HeaderContainer />,
    title: ''
  };

  return (
    <Stack.Navigator>
      {isAuth ? (
        <>
          <Stack.Screen name="Home" component={HomeScreen} options={commonOptions} />
          <Stack.Screen name="NewsItem" component={NewsItemScreen} options={commonOptions} />
        </>
      ) : (
        <Stack.Screen name="Auth" component={AuthScreen} options={{headerShown: false}} />
      )}
    </Stack.Navigator>
  );
};

export default memo(AppNavigator);
