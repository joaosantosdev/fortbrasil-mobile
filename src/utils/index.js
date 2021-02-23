import AsyncStorage from '@react-native-community/async-storage';
export default {
    httpStatus:{
        UNAUTHORIZED:401
    },
    async setToken(token) {
        return await AsyncStorage.setItem('token', token);
    },
    async getToken() {
        return await AsyncStorage.getItem('token');
    },
    isNull(value){
        return (value || '').trim() === '' || value === undefined || value === null;
    }
};

