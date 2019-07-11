
import React from 'react';
import { createStackNavigator } from 'react-navigation';

import Home from '../screens/Home';
import Rent from '../screens/Rent';
import Payment from '../screens/Payment';
import { fromRight } from 'react-navigation-transitions';
export default createStackNavigator(
    {
        Home,
        Rent,
        Payment
    },
    {
        initialRouteName: "Home",
        transitionConfig: () => fromRight(),
        navigationOptions: ({ navigation }) => {
            let tabBarVisible = true;
            if (navigation.state.index > 0) {
                tabBarVisible = false;
            }
            return {
                tabBarVisible,
            };
        }
    },


);