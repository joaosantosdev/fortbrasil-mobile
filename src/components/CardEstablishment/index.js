import {Image, Text, View, StyleSheet} from 'react-native';
import colors from '../../assets/colors';
import styles from '../../assets/styles';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

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
export default function CardEstablishment({item,onDelete}) {

    return (
        <View style={styleCardEstablishment.container}>
            <View style={{marginBottom: 10}}>
                <Text style={styleCardEstablishment.labelInfo}>
                    Nome
                </Text>
                <Text style={styleCardEstablishment.valueInfo}>{item.name}</Text>
            </View>
            <View style={{marginBottom: 10}}>
                <Text style={styleCardEstablishment.labelInfo}>
                    Endereço
                </Text>
                <Text style={styleCardEstablishment.valueInfo}>{item.description}</Text>
            </View>
            <View style={styleCardEstablishment.containerOptions}>
                <Image style={styleCardEstablishment.option}
                       source={require('../../assets/imgs/edit.png')}/>
                <TouchableOpacity onPress={()=>onDelete()}>
                    <Image style={[styleCardEstablishment.option, {marginLeft: 20}]}
                           source={require('../../assets/imgs/trash.png')}/>
                </TouchableOpacity>
            </View>
        </View>
    );
};
