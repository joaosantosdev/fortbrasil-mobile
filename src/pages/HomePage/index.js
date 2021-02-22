import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import colors from '../../assets/colors';
import userService from '../../services/user-service';

const styleHomePage = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginTop: 50,
    },
    info: {
        color: colors.secondaryColor,
        fontSize: 20,
    },
    messeage: {
        color: colors.primaryColor,
        fontSize: 25,
    },
});

export default function HomePage() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    useEffect(() => {
        userService.info().then(response => {
            const info = response.data.data;
            setEmail(info.email);
            setName(info.name);
        });
    }, []);

    return (
        <ScrollView style={{backgroundColor: colors.whiteColor}}>
            <View style={styleHomePage.container}>
                <Text style={styleHomePage.message}>Seja bem-vindo</Text>
                <Text style={styleHomePage.info}>{name}</Text>
                <Text style={styleHomePage.info}>{email}</Text>
            </View>
        </ScrollView>
    );
};
