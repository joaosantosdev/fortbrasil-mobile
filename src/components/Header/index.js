import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import colors from '../../assets/colors';
import styles from '../../assets/styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import utils from '../../utils';

const styleHeader = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: colors.whiteColor,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection:'row',
        paddingLeft:10,
        paddingRight:10,
        ...styles.shadow
    },
    logo: {
        width: 150,
        height: 50,
    },
    logout:{
        width:30,
        height:30
    }

});
export default function Header({navigation}) {

    const logout = async () =>{
        await utils.setToken('');
        navigation.replace('LoginPage');
    };

    return (
        <View style={styleHeader.container}>
            <Image source={require('../../assets/imgs/logo.png')} style={styleHeader.logo}/>
            <TouchableOpacity onPress={()=>logout()}>
                <Image source={require('../../assets/imgs/logout.png')} style={styleHeader.logout}/>
            </TouchableOpacity>
        </View>
    );
};
