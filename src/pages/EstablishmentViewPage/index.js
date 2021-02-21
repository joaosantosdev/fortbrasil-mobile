import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView, StatusBar} from 'react-native';
import colors from '../../assets/colors';
import Input from '../../components/Input';
import Button from '../../components/Button';
import styles from '../../assets/styles';
import {shallow} from 'react-native/jest/renderer';
import CardEstablishment from '../../components/CardEstablishment';

const styleLogin = StyleSheet.create({
    container: {
        backgroundColor: colors.whiteColor,
        width: '100%',
        padding: 20,
        justifyContent: 'center',
    },
    logo: {
        width: '100%',
        marginBottom: 30,
    },
    register: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
});

export default function EstablishmentViewPage() {

    const data = [new Array(100)].map((item, key) => {
        return {
            id: key,
            name: 'Teste 1',
            description: 'sd',
        };

    });
    return (
        <ScrollView style={{backgroundColor: colors.contentColor}}>
            <View style={{padding: 10, flexDirection: 'column', flex: 1}}>
                <CardEstablishment/>
                <CardEstablishment/>
                <CardEstablishment/>
                <CardEstablishment/>
                <CardEstablishment/>
                <CardEstablishment/>
                <CardEstablishment/>
            </View>
        </ScrollView>
    );
};
