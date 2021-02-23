import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView, StatusBar} from 'react-native';
import colors from '../../assets/colors';
import Input from '../../components/Input';
import Button from '../../components/Button';

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

export default function EstablishmentFormPage() {
    return (
        <ScrollView style={{backgroundColor: colors.whiteColor}}>
            <View>

                <View style={styleLogin.container}>
                    <Text style={{fontSize: 30, color: colors.secondaryColor,marginBottom: 20}}>Novo Estabelecimento</Text>
                    <Input label='Nome'/>
                    <Input label='Endereço' />
                    <Input label='Sobre'  />
                    <View style={{marginTop: 10}}>
                        <Button title='Salvar'/>
                    </View>
                    <View style={{marginTop: 10}}>
                        <Button title='Excluir' styleButton={{backgroundColor: colors.dangerColor}}/>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};
