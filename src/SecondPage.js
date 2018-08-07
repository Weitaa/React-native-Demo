import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
export default class SecondPage extends Component<Props>{
    static navigationOptions = {
        //title: 'page 2',
        // tabBarLabel: '页面2',
        DrawerNavigator:'页面2',
    };
    render() {
        const { navigate } = this.props.navigation;
        const { params } = this.props.navigation.state;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    这是第二页
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
                navigate('页面3');
                }}
                >
                <Text  style={styles.textView}>
                进入第三页
                </Text>
                </TouchableOpacity>
                {/*<Text style={styles.textView}>*/}
                {/*{'传来的参数是：' + params.search}*/}
                {/*</Text>*/}
            </View>
        );
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