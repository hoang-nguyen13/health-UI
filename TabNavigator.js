import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MainStackNavigator } from './StackNavigator'
import Profile from './Profile';
import Activities from './Activities';
import Information from './Information';
import Setting from './Setting';
import Entypo from 'react-native-vector-icons/Entypo'

Entypo.loadFont();

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{headerShown: false}}
        tabBarOptions = {{showLabel: false}}
        >
            <Tab.Screen name="Activities" component={Activities}
              options={{
                tabBarIcon: ({color}) => (
                  <Entypo name="emoji-happy" size={32} color={color} />
                ),
              }}
            />
            <Tab.Screen name="Information" component={Information}
              options={{
                tabBarIcon: ({color}) => (
                  <Entypo name="text-document" size={32} color={color} />
                ),
              }}
            />
            <Tab.Screen name="Home" component={MainStackNavigator}
              options={{
                tabBarIcon: ({color}) => (
                  <Entypo name="home" size={32} color={color} />
                ),
              }}
            />
            <Tab.Screen name="Phone" component={Profile}
              options={{
                tabBarIcon: ({color}) => (
                  <Entypo name="phone" size={32} color={color} />
                ),
              }}
            />
              <Tab.Screen name="Setting" component={Setting}
              options={{
                tabBarIcon: ({color}) => (
                  <Entypo name="cog" size={32} color={color} />
                ),
              }}
            />
        </Tab.Navigator>
    )
}

export default TabNavigator

const styles = StyleSheet.create({})
