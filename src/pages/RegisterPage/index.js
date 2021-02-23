import React, {useState} from 'react';
import {StyleSheet, View, Image, ScrollView, StatusBar, Alert} from 'react-native';
import colors from '../../assets/colors';
import Input from '../../components/Input';
import Button from '../../components/Button';
import utils from '../../utils';
import userService from '../../services/user-service';

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

export default function RegisterPage(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const create = async () => {
        if (loading) {
            return;
        }

        if (utils.isNull(name) || utils.isNull(email) || utils.isNull(password)) {
            return Alert.alert('INFORMAÇÃO', 'Preencha os dados corretamente.');
        }
        setLoading(true);
        await userService.register({name, email, password}).then(() => {
            Alert.alert('SUCESSO', 'Cadastro realizado com sucesso.');
            props.navigation.goBack();
        }).catch((error) => {
            let message = 'Dados Inválidos. Verifique.';
            try {
                error = error.response.data.error;
                message = typeof error === 'string' ? error : message;
            } catch (e) {
            }
            return Alert.alert('INFORMAÇÃO', message);
        });
        setLoading(false);

    };

    return (
        <ScrollView style={{backgroundColor: colors.whiteColor}}>
            <View>
                <StatusBar backgroundColor={colors.primaryColor}/>
                <View style={styleRegisterPage.container}>
                    <Image source={require('../../assets/imgs/logo.png')} style={styleRegisterPage.logo}/>
                    <Input label='Nome'
                           value={name}
                           onChange={(value) => setName(value)}/>
                    <Input label='E-mail'
                           onChange={(value) => setEmail(value)}/>
                    <Input label='Senha'
                           secureTextEntry={true}
                           onChange={(value) => setPassword(value)}/>
                    <Button title={loading ? 'Criando...' : 'Criar Conta'}
                            onPress={() => create()}/>
                </View>
            </View>
        </ScrollView>
    );
};
