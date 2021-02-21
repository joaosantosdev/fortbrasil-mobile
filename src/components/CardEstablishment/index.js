import {Image, Text, View, StyleSheet} from 'react-native';
import colors from '../../assets/colors';
import styles from '../../assets/styles';
import React from 'react';

const styleCardEstablishment = StyleSheet.create({
    container: {
        width: '100%',
        minHeight: 100,
        backgroundColor: colors.whiteColor,
        borderRadius: styles.radius,
        padding: 10, marginBottom: 15,
    },
    option: {
        width: 30,
        height: 30,
    },
    containerOptions: {
        marginBottom: 10,
        flexDirection: 'row',
    },
    labelInfo: {
        fontWeight: 'bold',
        color: colors.secondaryColor,
        fontSize: 18,
    },
    valueInfo: {
        color: colors.secondaryColor,
        fontSize: 15,
    },
});
export default function CardEstablishment() {
    return (
        <View style={styleCardEstablishment.container}>
            <View style={{marginBottom: 10}}>
                <Text style={styleCardEstablishment.labelInfo}>
                    Nome
                </Text>
                <Text style={styleCardEstablishment.valueInfo}>Teste 1</Text>
            </View>
            <View style={{marginBottom: 10}}>
                <Text style={styleCardEstablishment.labelInfo}>
                    Endereço
                </Text>
                <Text style={styleCardEstablishment.valueInfo}>Teste 1</Text>
            </View>
            <View style={styleCardEstablishment.containerOptions}>
                <Image style={styleCardEstablishment.option}
                       source={require('../../assets/imgs/edit.png')}/>
                <Image style={[styleCardEstablishment.option, {marginLeft: 20}]}
                       source={require('../../assets/imgs/trash.png')}/>
            </View>
        </View>
    );
};
