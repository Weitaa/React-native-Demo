import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
} from 'react-native';
export default class ThridPage extends Component<Props> {
    static navigationOptions = {
        //title:'page 3',
        // tabBarLabel: '页面3',
        DrawerNavigator:'页面3',
    };
    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    这是第三页
                </Text>
                <TouchableOpacity
                onPress={()=>{
                this.props.navigation.goBack()
                }}
                >
                <Text style={styles.textView}>
                返回
                </Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>{
                navigate('页面1');
                }}
                >
                <Text style={styles.textView}>
                进入第一页
                </Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>{
                navigate('页面2');
                }}
                >
                <Text  style={styles.textView}>
                进入第二页
                </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    textView: {
        fontSize: 16,
        textAlign: 'center',
        margin: 10,
        color:'red'
    },
});