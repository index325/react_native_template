import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SignInScreen from '../pages/SignIn';

const AuthRoutes: React.FC = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator initialRouteName="SignIn" screenOptions={{ headerShown: false }}>
      <Screen name="SignIn" component={SignInScreen} />
    </Navigator>
  );
};

export default AuthRoutes;
