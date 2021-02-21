import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView, StatusBar} from 'react-native';
import colors from '../../assets/colors';
import Input from '../../components/Input';
import Button from '../../components/Button';
import styles from '../../assets/styles';

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

export default function LoginPage() {
    return (
        <ScrollView style={{backgroundColor: colors.whiteColor}}>
            <View>
                <StatusBar backgroundColor={colors.primaryColor}/>
                <View style={styleLogin.container}>
                    <Image source={require('../../assets/imgs/logo.png')} style={styleLogin.logo}/>
                    <Input label='E-mail'/>
                    <Input label='Senha' secureTextEntry={true}/>
                    <Button title='Entrar'/>
                    <View style={styleLogin.register}>
                        <Text style={styles.link}>Criar Conta</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};
