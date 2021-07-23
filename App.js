import React, {useState, useEffect} from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import ListScreen from './src/ListScreen'
import GridScreen from './src/GridScreen'
import Dummy1 from './src/Dummy1';

const AppStack = createStackNavigator()
const Tab=createBottomTabNavigator()

const App = () => {

  return (
    <NavigationContainer>
            <Tab.Navigator 
        initialRouteName = 'LIST'
        tabBarOptions = {{
          activeTintColor: 'rgb(114,174,122)',
          inactiveTintColor: 'rgb(232,232,232)',
          style: {
            backgroundColor: 'rgb(250,250,250)',
            height: 70
          }
        }}
      >
        <Tab.Screen name="LIST" component={ListScreen} 
          options = {{
            tabBarLabel: '',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="circle" color={color} size={35} />
            )
          }}
        />
        <Tab.Screen name="GRID" component={GridScreen} 
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="circle" color={color} size={35} />
            ),
          }}
        />
        <Tab.Screen name="Dummy1" component={Dummy1} 
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="circle" color={color} size={35} />
            ),
          }}
          listeners={{
            tabPress: e => {
              // Prevent default action
              e.preventDefault();
            },
          }}
        
        />
        <Tab.Screen name="Dummy2" component={Dummy1} 
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="circle" color={color} size={35} />
            ),
          }}
          listeners={{
            tabPress: e => {
              // Prevent default action
              e.preventDefault();
            },
          }}
        
        />
        <Tab.Screen name="Dummy3" component={Dummy1} 
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="circle" color={color} size={35} />
            ),
          }}
          listeners={{
            tabPress: e => {
              // Prevent default action
              e.preventDefault();
            },
          }}
        
        />


      </Tab.Navigator>

    </NavigationContainer>
  )
}

export default App