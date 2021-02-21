import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import colors from '../../assets/colors';
import styles from '../../assets/styles';
const styleHeader = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: colors.primaryColor,
        justifyContent: 'center',
        alignItems: 'flex-start',
        ...styles.shadow
    },
    logo: {
        width: 150,
        height: 50,
    },

});

export default function Header() {
    return (
        <View style={styleHeader.container}>
            <Image source={require('../../assets/imgs/logo.png')} style={styleHeader.logo}/>
        </View>
    );
};
