import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView, StatusBar} from 'react-native';
import colors from '../../assets/colors';
import Input from '../../components/Input';
import Button from '../../components/Button';
import styles from '../../assets/styles';

const styleRegisterPage = StyleSheet.create({
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
    login: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
});

export default function RegisterPage() {
    return (
        <ScrollView style={{backgroundColor: colors.whiteColor}}>
            <View>
                <StatusBar backgroundColor={colors.primaryColor}/>
                <View style={styleRegisterPage.container}>
                    <Image source={require('../../assets/imgs/logo.png')} style={styleRegisterPage.logo}/>
                    <Input label='Nome'/>
                    <Input label='E-mail'/>
                    <Input label='Senha' secureTextEntry={true}/>
                    <Button title='Criar Conta'/>
                </View>
            </View>
        </ScrollView>
    );
};
