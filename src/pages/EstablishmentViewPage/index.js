import React, {useEffect, useState}  from 'react';
import {StyleSheet, View, Text, Image, ScrollView, StatusBar} from 'react-native';
import colors from '../../assets/colors';
import Input from '../../components/Input';
import Button from '../../components/Button';
import styles from '../../assets/styles';
import {shallow} from 'react-native/jest/renderer';
import CardEstablishment from '../../components/CardEstablishment';
import establishmentService from '../../services/establishment-service';

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

export default function EstablishmentViewPage() {
    const [data,setData]  = useState([]);
    const getEstablishments = async () => {
        establishmentService.getEstablishments().then(response=>{
            if(response.data){
                setData(response.data.data);
            }
        });
    };
    useEffect(()=>{
       getEstablishments();
    },[]);

    const deleteEstablishment = (item) =>{
            establishmentService.deleteEstablishment(item.id).then(()=>{
               getEstablishments();
            });
    };

    return (
        <ScrollView style={{backgroundColor: colors.contentColor}}>
            <View style={{padding: 10, flexDirection: 'column', flex: 1}}>
                {
                  data.map(item=>(
                      <CardEstablishment
                          key={item.id} item={item}
                          onDelete={()=>deleteEstablishment(item)}/>
                  ))
                }
            </View>
        </ScrollView>
    );
};
