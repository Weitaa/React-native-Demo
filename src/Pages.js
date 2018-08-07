import React, { Component } from 'react';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThridPage from './ThridPage';
import Button from './Button';
import CountDemo from './CountDemo';
import {
    StackNavigator,
    TabNavigator,
    DrawerNavigator
} from 'react-navigation';
export default class Pages extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <SimpleAppNavigator/>
        )
    }
}
const SimpleAppNavigator = DrawerNavigator({
    页面1: {screen: FirstPage},
    页面2: {screen: SecondPage},
    页面3: {screen: ThridPage},
    Button: {screen: Button},
    CountDemo: {screen: CountDemo},


},{
    initialRouteName: '页面1',
    swipeEnabled: true,
    animationEnabled: true,
    lazy: false,
    tabBarPosition:'bottom',
});