import React from 'react';
import { View, Text } from 'react-native'
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Navigator from './navigation/MainNavigation';
import ProfileNavigator from './navigation/ProfileNavigator';
import Icon from "react-native-vector-icons/Entypo"
console.disableYellowBox = true;
const TabNavigator = createBottomTabNavigator({
    Home: Navigator,
    Calendar: Navigator,
    // Post: {
    //     screen: () => null,
    //     name: null,
    //     navigationOptions: () => ({
    //         tabBarIcon: () => {
    //             return (
    //                 <View style={{ backgroundColor: 'rgb(21,96,196)', width: 50, height: 50, borderRadius: 25, alignItems: 'center' }} >
    //                     <Text style={{ fontSize: 36, color: 'white', paddingTop: 3 }}>+</Text>
    //                 </View>
    //             )
    //         },
    //         tabBarLabel: ' '
    //     }),
    // },
    Directions: ProfileNavigator,
    Profile: ProfileNavigator
},
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    return <Icon name={'home'} size={25} color={focused ? 'rgb(21,96,196)' : 'rgb(133,146,165)'} />;
                }
                if (routeName === 'Calendar') {
                    return <Icon name={'calendar'} size={25} color={focused ? 'rgb(21,96,196)' : 'rgb(133,146,165)'} />;
                }
                if (routeName === 'Directions') {
                    return <Icon name={'direction'} size={25} color={focused ? 'rgb(21,96,196)' : 'rgb(133,146,165)'} />;
                }
                if (routeName === 'Profile') {
                    return <Icon name={'user'} size={25} color={focused ? 'rgb(21,96,196)' : 'rgb(133,146,165)'} />;
                }
            },
        }),
        tabBarOptions: {
            activeTintColor: 'rgb(21,96,196)',
            inactiveTintColor: 'rgb(133,146,165)',
            tabBarLabel: null
        },

    }
)

export default createAppContainer(TabNavigator);