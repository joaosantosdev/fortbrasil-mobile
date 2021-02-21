import {TextInput, View, Text, StyleSheet} from 'react-native';
import colors from '../../assets/colors';
import React from 'react';

const stylesInput = StyleSheet.create({
    containerInput: {
        width: '100%',
        backgroundColor: colors.contentColor,
        borderRadius: 7,
        color: colors.secondaryColor,
    },
    label:{
        fontWeight:'bold',
        color:colors.secondaryColor,
        fontSize:18
    }
});


export default function Input({label,secureTextEntry,propsInput}) {
    return (
        <View style={{marginBottom:7}}>
            <Text style={stylesInput.label}>{label}</Text>
            <View style={stylesInput.containerInput}>
                <TextInput secureTextEntry={secureTextEntry} {...propsInput}/>
            </View>
        </View>
    );
};
