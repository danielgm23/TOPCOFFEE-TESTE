import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './index';
import InfoProductsScreen from './infoProducts';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="InfoProducts" component={InfoProductsScreen} />
    </Stack.Navigator>
  );
};

export default App;
