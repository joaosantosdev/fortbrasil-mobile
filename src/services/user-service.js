import axios from "./axios";

export default {
    async register(data) {
        return await axios.post('user/register', data);
    },
    async login(data) {
        return await axios.post('user/login', data);
    },
    async info() {
        return await axios.get('user/info', {security: true});
    }
}
