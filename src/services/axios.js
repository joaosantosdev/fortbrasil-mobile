import axios from "axios";
import utils from '../utils';
import config from '../config';

const baseApi = axios.create({
    baseURL:config.URL_API
});

baseApi.interceptors.request.use(async (config) => {
    if(config.security){
        const token = await utils.getToken();
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});


baseApi.interceptors.response.use((response) => {
    console.log(response)
    return response;
}, (error) => {
    if(utils.httpStatus.UNAUTHORIZED === error.response.status){
        utils.setToken(null)
        return '';
    }
    return Promise.reject(error);
});
export default baseApi;
