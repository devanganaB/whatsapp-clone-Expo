import { View, Text } from 'react-native'
import React from 'react'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Status from '@/app/screens/Status';
import ChatList from '@/app/screens/ChatList';
import CallList from '@/app/screens/CallList';
import CameraTab from '@/app/screens/CameraTab';
import { Colors } from '@/constants/Colors';
import VectorIcon from '@/app/utils/VectorIcons';

const Tab = createMaterialTopTabNavigator();

export default function TopTabBar() {
    return (
        <Tab.Navigator
            initialRouteName="Chats"
            screenOptions={() => ({
                tabBarActiveTintColor: Colors.white,
                tabBarInactiveTintColor: Colors.tertiary,
                tabBarIndicatorStyle: { backgroundColor: Colors.white },
                tabBarStyle: {
                    backgroundColor: Colors.primaryColor
                },
            })}
        >

            <Tab.Screen name="Camera" component={CameraTab} options={{
                tabBarShowLabel: false,
                tabBarIcon: ({ color }) => (<VectorIcon
                    type='FontAwesome'
                    name='camera'
                    color={color}
                    size={20} />)
            }} />
            <Tab.Screen name="Chats" component={ChatList} />
            <Tab.Screen name="Status" component={Status} />
            <Tab.Screen name="Calls" component={CallList} />
        </Tab.Navigator>
    )
}
