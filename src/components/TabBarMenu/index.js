import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView, StatusBar} from 'react-native';
import colors from '../../assets/colors';
import Header from '../header';
import styles from '../../assets/styles';
import TabBarMenuItem from './TabBarMenuItem';

const styleTabMenuItem = StyleSheet.create({
    tabs: {
        backgroundColor: colors.whiteColor,
        height: 55,
        ...styles.shadow,
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default function TabBarMenu() {

    const items = [
        {
            key: 2,
            label: 'Novo',
            icon: require('../../assets/imgs/home.png'),
            iconActive: require('../../assets/imgs/home_active.png'),

        },
        {
            key: 1,
            label: 'Home',
            icon: require('../../assets/imgs/home.png'),
            iconActive: require('../../assets/imgs/home_active.png'),
        },
        {
            key: 3,
            label: 'Lista',
            icon: require('../../assets/imgs/home.png'),
            iconActive: require('../../assets/imgs/home_active.png'),
        },
    ];

    return (
        <View style={{flex: 1}}>
            <Header/>
            <View style={{
                backgroundColor: colors.contentColor,
                flex: 1,
                width: '100%',
            }}>
            </View>
            <View style={styleTabMenuItem.tabs}>
                {
                    items.map(item => (
                        <TabBarMenuItem active={1} item={item} key={item.key}/>
                    ))
                }
            </View>
        </View>
    );
};
