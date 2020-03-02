import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Cart from './pages/Cart';
import HeaderBar from './components/HeaderBar';

const Stack = createStackNavigator();

Stack.screenOptions = {
  headerTitleAlign: 'center',
  headerBackTitleVisible: false,
  headerStyle: {
    backgroundColor: '#141419',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={Stack.screenOptions}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={Home.NavigationOptions}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={Cart.NavigationOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
