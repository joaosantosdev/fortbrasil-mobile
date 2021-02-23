import React, {useState} from 'react';
import {StyleSheet, View, Text, Image, ScrollView, StatusBar} from 'react-native';
import colors from '../../assets/colors';
import Header from '../Header';
import styles from '../../assets/styles';
import TabBarMenuItem from './TabBarMenuItem';
import EstablishmentFormPage from '../../pages/EstablishmentFormPage';
import EstablishmentViewPage from '../../pages/EstablishmentViewPage';
import HomePage from '../../pages/HomePage';

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

export default function TabBarMenu(props) {
    const HOME = 1, ESTABLISHMENT_FORM = 2, ESTABLISHMENT_VIEW = 3;
    const [pageActive, setPageActive] = useState(HOME);
    const getContentPage = (key) => {
        if (key === HOME) {
            return <HomePage/>;
        } else if (key === ESTABLISHMENT_FORM) {
            return <EstablishmentFormPage/>;
        }
        return <EstablishmentViewPage/>;
    };

    const items = [
        {
            key: 1,
            label: 'Home',
            icon: require('../../assets/imgs/home.png'),
            iconActive: require('../../assets/imgs/home_active.png'),
        },
        {
            key: 2,
            label: 'Novo',
            icon: require('../../assets/imgs/add.png'),
            iconActive: require('../../assets/imgs/add_active.png'),
        },
        {
            key: 3,
            label: 'Lista',
            icon: require('../../assets/imgs/list.png'),
            iconActive: require('../../assets/imgs/list_active.png'),
        },
    ];

    return (
        <View style={{flex: 1}}>
            <Header navigation={props.navigation}/>
            <View style={{
                backgroundColor: colors.whiteColor,
                flex: 1,
                width: '100%',
            }}>
                {getContentPage(pageActive)}
            </View>
            <View style={styleTabMenuItem.tabs}>
                {
                    items.map(item => (
                        <TabBarMenuItem
                            onPress={(item) => setPageActive(item.key)}
                            active={pageActive}
                            item={item} key={item.key}/>
                    ))
                }
            </View>
        </View>
    );
};
