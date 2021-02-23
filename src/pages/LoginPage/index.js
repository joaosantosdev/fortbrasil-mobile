import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Image, ScrollView, StatusBar, Alert} from 'react-native';
import colors from '../../assets/colors';
import Input from '../../components/Input';
import Button from '../../components/Button';
import styles from '../../assets/styles';
import utils from '../../utils';
import userService from '../../services/user-service';

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

export default function LoginPage(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const isLogged = async () => {
            const token = await utils.getToken();
            console.log(token)
            if (!utils.isNull(token)) {
                props.navigation.replace('Menu');
            }
        };
        isLogged();
    }, []);

    const login = async () => {
        if (utils.isNull(email) || utils.isNull(password)) {
            return Alert.alert('INFORMAÇÃO', 'Preencha os campos corretamente.');
        }
        await userService.login({email, password}).then(response => {
            utils.setToken(response.data.data).then(() => {
                props.navigation.replace('Menu');
            });
        }).catch(error => {
            console.log(error.response);
            Alert.alert('INFORMAÇÃO', 'Dados Inválidos. Tente Novamento.');
        });
    };

    return (
        <ScrollView style={{backgroundColor: colors.whiteColor}}>
            <View>
                <StatusBar backgroundColor={colors.primaryColor}/>
                <View style={styleLogin.container}>
                    <Image source={require('../../assets/imgs/logo.png')} style={styleLogin.logo}/>
                    <Input label='E-mail'
                           value={email}
                           onChange={(value) => setEmail(value)}/>
                    <Input label='Senha'
                           secureTextEntry={true}
                           value={password}
                           onChange={(value) => setPassword(value)}/>
                    <Button title='Entrar' onPress={() => login()}/>
                    <View style={styleLogin.register}>
                        <Text style={styles.link} onPress={() => {
                            props.navigation.push('RegisterPage');
                        }}>Criar Conta</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};
