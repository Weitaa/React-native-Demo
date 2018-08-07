import React,{Component} from 'react';
import Register from './Register';
import{
    TouchableOpacity,
    StyleSheet,
    TextInput,
    View,
    Text,
}from 'react-native'
import FirstPage from "./FirstPage";

export default class Login extends Component{
    username='';
    password='';

    static  navigationOptions={
        title:'登录',
    }
    constructor(props) {
        super(props);
    }
    // _Login()
    // {
    //     this.props.navigator({
    //         component: FirstPage
    //     });
    // }
render(){
    const { navigate } = this.props.navigation;
        return(
            <TouchableOpacity
                 activeOpacity={1.0}
                 style={styles.container}>
                <View
                  style={styles.inputBox}>
                    <TextInput
                          style={styles.input}
                          underlineColorAndroid={'transparent'}  //下划线改为透明
                          placeholderTextColor={'#ccc'}
                          placeholder={'用户名'}
                          />
                </View>
                <View
                    style={styles.inputBox}>
                    <TextInput
                        style={styles.input}
                        underlineColorAndroid={'transparent'}  //下划线改为透明
                        secureTextEntry={true}
                        placeholderTextColor={'#ccc'}
                        placeholder={'密码'}
                    />
                </View>
                <TouchableOpacity style={styles.btn}>
                    <View>
                        <Text style={styles.btnText} onPress={()=>navigate('页面1')}>登录</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <View>
                        <Text style={styles.btnText}>注册</Text>
                    </View>
                </TouchableOpacity>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    constructor:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    btn:{

    },
    btnText:{

    }
})