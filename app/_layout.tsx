import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './index';
import InfoProductsScreen from './infoProducts';
import PedidoScreen from './pedidos';
import TabNavigator from '../components/BottomTabNavigator'
const Stack = createStackNavigator();

const App = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ headerShown: false }} 
        component={TabNavigator}
      />
      <Stack.Screen 
        name="InfoProducts" 
        component={InfoProductsScreen} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Pedido" 
        component={PedidoScreen} 
        options={{ headerShown: false }} 
        
      />
    </Stack.Navigator>
  );
};

export default App;
