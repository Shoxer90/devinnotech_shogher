import { API_KEY } from "../basic";
import axios from 'axios';

export const getCurrentWeather = async(city,unit) => {
    try {
        const data = await axios.get( `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${unit}`)
        return data
    }catch(err) {
        return err
    }
};

export const getDailyWeather = async(city,unit) => {
    try {
        const data = await axios.get( `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=${unit}`);
        return data
    }catch(err) {
        return err
    }
};

export const getDailyWeatherForDays = async(coord,cnt=5) => {
    try {
        const data = await axios.get( `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${coord?.lat}&lon=${coord?.lon}&cnt=${cnt}&appid=${API_KEY}`);
        return data
    }catch(err) {
        return err
    }
};