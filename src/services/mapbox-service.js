import axios from 'axios';
import config from '../config';


export default {
    async  searchLocation(search){
        return await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${search}.json?access_token=${config.MAPBOX_TOKEN}`)
    }
}
