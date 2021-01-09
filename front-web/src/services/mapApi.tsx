import axios from 'axios';

const mapboxToken = process.env.REACT_APP_ACESS_URL;

export default function fetchLocalMapBox(local: string) {
    return axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`);
}