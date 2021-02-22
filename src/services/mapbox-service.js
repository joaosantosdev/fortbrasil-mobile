import axios from 'axios';


export default {
    async  searchLocation(search){
        return await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${search}.json?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`)
    }
}
