/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Login from './src/Login';
// import Register from './src/Register';
import FirstPage from './src/FirstPage';
import Pages from './src/Pages';
import {
    StyleSheet,
} from 'react-native';
import {StackNavigator} from 'react-navigation'

const SimpleApp = StackNavigator({
    Login:{screen:Login,
    // navigationOptions{
    //   title:'登陆'
    // }
    },
    // Register:{screen:Register},
    页面1: {screen: FirstPage,
        navigationOptions:{
        title:'页面1'
}}});
        type Props = {};
        export default class App extends Component<Props> {
            render() {
                return (
                    <Pages/>,
                    <SimpleApp/>
                );
    }
}