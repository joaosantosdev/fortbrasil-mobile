import axios from "./axios";

export default {
    async saveEstablishment(data){
        return await axios.post('establishments',data,{security:true});
    },
    async updateEstablishment(id,data){
        return await axios.put(`establishments/${id}`,data,{security:true});
    },
    async getEstablishments(){
        return await axios.get('establishments',{security:true});
    },
    async getEstablishmentsById(id){
        return await axios.get(`establishments/${id}`,{security:true});
    },
    async deleteEstablishment(id){
        return await axios.delete(`establishments/${id}`,{security:true});
    }
}
