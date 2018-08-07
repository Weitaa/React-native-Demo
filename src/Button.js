import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    View,
    Alert,
    TouchableHighlight,
    Text,
} from 'react-native';

// const onButtonPress = ()=>{
//     Alert.alert('点击了Button');
// }

export default class Button extends Component<Props> {
    static navigationOptions = {
        //title: 'page 1',
        // tabBarLabel: '页面1',
        DrawerNavigator:'Button',
    };

    render() {
        const { navigate } = this.props.navigation;
        return(
            <TouchableHighlight onPress={
                ()=> {
                    Alert.alert(
                        `你点击了Button`,
                        'Hello World！',
                        [
                            {text: '以后再说', onPress: () => console.log('Ask me later pressed')},
                            {text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                            {text: '确定', onPress: () => console.log('OK Pressed')},
                        ]
                    )
                }
            }>
                <Text style={styles.btnView}>Button</Text>
            </TouchableHighlight>
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
    btnView:{
        textAlign: 'center',
        color :'white',
        marginTop :20,
        borderRadius:8,
        padding: 10,
        backgroundColor:'brown',
    },
});

