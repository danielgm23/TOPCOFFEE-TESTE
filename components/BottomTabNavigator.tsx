import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../app/index';
import PedidoScreen from '../app/pedidos';
import ProfileScreen from '../app/profile';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home-outline" color={color} size={size} />
          ),
          headerShown: false 
        }} 
      />
      <Tab.Screen 
        name="Pedido" 
        component={PedidoScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="document-outline" color={color} size={size} />
          ),
          headerShown: false 
        }} 
      />
      <Tab.Screen 
        name="Configurações" 
        component={ProfileScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="settings-outline" color={color} size={size} />
          ),
          headerShown: false 
        }} 
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
