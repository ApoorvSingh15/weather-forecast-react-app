import axios from 'axios';


const API_KEY = '8f33edb3d12eaacbb004a48c12ad9dd3';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){

    const url = `${ROOT_URL}&q=${city},in`;
    const request = axios.get(url);

   

    return{
        type : FETCH_WEATHER,
        payload : request
    };
}