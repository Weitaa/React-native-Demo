import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput
} from 'react-native';
export default class FirstPage extends Component<Props> {
    static navigationOptions = {
        //title: 'page 1',
        // tabBarLabel: '页面1',
        DrawerNavigator:'页面1',
    };
    constructor(props) {
        super(props);
    }
    // _pressLogin()
    // {
    //     this.props.nativigator.pop();
    // }
    render() {
        const { navigate } = this.props.navigation;  //获取navigate
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    这是第一页
                </Text>
                <View style={styles.settingStyle}>
                <TextInput style={styles.textinputstyle}
                           returnKeyType="search"
                           onChangeText={(text) => this.setState({text})}/>

                    <Text style={styles.btnView} onPress={this.search.bind(this)}>确定</Text>
                </View>
                <TouchableOpacity
                onPress={()=>{
                navigate('页面2');
                }}
                >
                <Text style={styles.textView}>
                进入第二页
                </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>{
                        navigate('页面3');
                    }}
                >
                <Text style={styles.textView}>
                进入第三页
                </Text>
                </TouchableOpacity>
            </View>
        );
    }
    search() {
        alert(this.state.text);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    textinputstyle:{
        width:200,
        height:40,
        marginTop:10,
        // 设置背景颜色
        backgroundColor:'#FFB6C1'
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
    btnView:{
        backgroundColor:'blue',
        color:'white',
        width:50,
        height:25,
        justifyContent:'center',
        textAlign: 'center',
        borderRadius:8,
        marginLeft:8,

    },
    settingStyle:{
        flexDirection:'row',  //设置主轴方向
        alignItems:'center',  //侧轴对齐
    }
});