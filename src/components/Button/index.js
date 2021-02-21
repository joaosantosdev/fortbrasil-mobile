import {TextInput, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../../assets/colors';
import React from 'react';

const styleButton = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: colors.primaryColor,
        justifyContent: 'center',
        padding: 10,
        alignItems: 'center',
        borderRadius: 100,
    },
    title: {
        color: colors.whiteColor,
        fontSize: 18,
    },

});


export default function Button(props) {
    return (
        <TouchableOpacity onPress={() => {
            if (props.onPress) {
                props.onPress();
            }
        }}>
            <View style={[styleButton.container, props.styleButton]}>
                <Text style={styleButton.title}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};
