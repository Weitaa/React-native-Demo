'use strict'

import React, { Component } from 'react';
import{
    AppRegistry,
    StyleSheet,
    Text,
    View,
}from 'react-native'
export default class CountDemo extends Component{
    static navigationOptions = {
        //title: 'page 1',
        // tabBarLabel: '页面1',
        DrawerNavigator:'CountDemo',
    };
    state = {
        count:10,
    };
    render(){
        const {count} = this.state;
        return(
            <View style={styles.welcome}>
                {count>0 ? <Text>{count}</Text> : <Text>时间到！</Text>}
            </View>
        )
    }
    componentDidMount(){
        this.timer = setInterval(()=>{
            const {count} = this.state;
            if(count===0){
                return clearInterval(this.timer);
            }
            this.setState({
                count:count-1,
            });
        },1000);
    }
    componentWillUnmount(){
        clearInterval(this.timer);
    }
}

const styles = StyleSheet.create({
    welcome:{
        alignItems:'center',
        justifyContent: 'center',
        marginTop:120,
    },
    TimerStyle:{
        color:'red',
        fontSize:30,
    }
});