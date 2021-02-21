import {StyleSheet, View, Text, Image, ScrollView, StatusBar} from 'react-native';
import colors from '../../assets/colors';
import React from 'react';

const styleTabBarMenuItem = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 25,
        height: 25,
    },
    label: {
        color: colors.secondaryColor,
        fontWeight: 'bold',
    },
    labelActive: {
        color: colors.primaryColor,
        fontWeight: 'bold',
    },
});
export default function TabBarMenuItem({item, active}) {
    return (
        <View style={styleTabBarMenuItem.container}>
            <Image style={styleTabBarMenuItem.icon} source={active === item.key ? item.iconActive : item.icon}/>
            <Text
                style={item.key === active ? styleTabBarMenuItem.labelActive : styleTabBarMenuItem.label}>{item.label}</Text>
        </View>
    );
};
