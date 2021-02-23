import React, {useState} from 'react';
import {StyleSheet, View, Text, ScrollView, Dimensions, TouchableOpacity, Alert} from 'react-native';
import colors from '../../assets/colors';
import Input from '../../components/Input';
import Button from '../../components/Button';
import styles from '../../assets/styles';
import mapboxService from '../../services/mapbox-service';
import establishmentService from '../../services/establishment-service';

import utils from '../../utils';

let ScreenHeight = Dimensions.get('window').height;

const styleEstablishment = StyleSheet.create({
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
    containerLocations: {
        width: '100%',
        position: 'absolute',
        height: ScreenHeight - 100,
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: 10000,
        alignItems: 'center',
        padding: 20,
        justifyContent: 'center',
    },
    cardLocations: {
        width: '100%',
        height: 355,
        backgroundColor: colors.whiteColor,
        ...styles.shadow,
        borderRadius: styles.radius,
        padding: 10,

    },
    itemLocation: {
        width: '100%',
        marginBottom: 5,
        backgroundColor: colors.contentColor,
        padding: 12,
        borderRadius: styles.radius,
    },
    labelLocation: {
        fontSize: 17,
        fontWeight: 'bold',
        color: colors.secondaryColor,
    },
});

export default function EstablishmentFormPage() {
    const [openLocation, setOpenLocation] = useState(false);
    const [locations, setLocations] = useState([]);
    const [location, setLocation] = useState({name: 'Selecione'});
    const [about, setAbout] = useState(null);
    const [name, setName] = useState(null);

    const searchLocation = async (text) => {

        const response = await mapboxService.searchLocation(text);
        if (response.data) {
            setLocations(response.data.features.map(location => ({
                name: location.place_name,
                latitude: location.geometry.coordinates[1],
                longitude: location.geometry.coordinates[0],
            })));
        }

    };
    const selectedLocation = (location) => {
        setLocation(location);
        setOpenLocation(false);
    };

    const save = async () => {
        if (!location.latitude || utils.isNull(name) || utils.isNull(about)) {
            return Alert.alert('INFORMAÇÃO', 'Preencha os campos corretamente.');
        }
        const response = await establishmentService.saveEstablishment({
            name,
            about,
            description: location.name,
            latitude: location.latitude,
            longitude: location.longitude,
        });

        if (response.data) {
            Alert.alert('SUCESSO', 'Cadastro realizado com sucesso.');
            setLocation({name: 'Selecione'});
            setAbout(null);
            setName(name);
        } else {
            return Alert.alert('INFORMAÇÃO', 'Ocorreu um erro. Tente Novamente.');
        }
    };

    return (
        <View>
            {openLocation ?
                <View style={styleEstablishment.containerLocations}>
                    <View style={styleEstablishment.cardLocations}>
                        <Input label='Pesquisar' onChange={(text) => searchLocation(text)}/>
                        <ScrollView>
                            {
                                locations.map((location) => (
                                    <TouchableOpacity
                                        onPress={() => selectedLocation(location)}
                                        style={styleEstablishment.itemLocaiton}>
                                        <Text style={styleEstablishment.labelLocation}>{location.name}</Text>
                                    </TouchableOpacity>
                                ))
                            }
                        </ScrollView>

                    </View>
                </View>
                : null
            }
            <ScrollView style={{backgroundColor: colors.whiteColor}}>
                <View>
                    <View style={styleEstablishment.container}>
                        <Text style={{fontSize: 30, color: colors.secondaryColor, marginBottom: 20}}>Novo
                            Estabelecimento</Text>
                        <Input label='Nome'
                               onChange={(value) => setName(value)}/>
                        <Input label='Sobre'
                               onChange={(value) => setAbout(value)}/>
                        <TouchableOpacity
                            onPress={() => setOpenLocation(true)}>
                            <Input label='Endereço'
                                   value={location.name}
                                   editable={false}/>
                        </TouchableOpacity>
                        <View style={{marginTop: 10}}>
                            <Button title='Salvar'
                                    onPress={() => save()}/>
                        </View>
                        <View style={{marginTop: 10}}>
                            <Button title='Excluir'
                                    styleButton={{backgroundColor: colors.dangerColor}}/>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};
