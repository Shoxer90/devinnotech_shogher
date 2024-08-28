import { memo, useEffect, useState } from "react";
import { getCurrentWeather, getDailyWeather, getDailyWeatherForDays } from "../service/weather/weather_api";
import Navbar from "./navbar";
import Content from "./content";

const Components = () => {
    const [currentWeather, setCurrentWeather] = useState({});
    const [dailyWeather, setDailyWeather] = useState({});
    const [errMessage,setErrMessage] = useState({});
    const [units,setUnits] = useState("metric");
    const [city, setCity] = useState("Yerevan");
    



    const searchCity = (city) => {
        getCurrentWeather(city,units).then((res) => {
            if(res?.status === 200) {
               return setCurrentWeather(res?.data)
            } else if(res?.status === 404) {
                
                setErrMessage(`City ${city} is not found`)
            }else{
                setErrMessage("Something went wrong")
            }

        })
    };

    const searchDaily = (city, units) => {
        getDailyWeather(city, units).then((res) => {
            if(res?.status === 200) {
               return setDailyWeather(res?.data)
            }else if(res?.status === 404) {
                setErrMessage(`City ${city} is not found`)
            }else{
                setErrMessage("Something went wrong")
            }

        })
    };

    const toggleUnits = (arg) => {
        setUnits(arg)
    };
    //  it was for daily data,but i think its paid
    // useEffect(() => {
    //     currentWeather && getDailyWeatherForDays(currentWeather?.coord)
    // }, [currentWeather]);
    
    useEffect(() => {
        searchCity(city,units)
        searchDaily(city,units)
    }, [units]);

    return (
        <div>
            <Navbar searchCity={searchCity} toggleUnits={toggleUnits} city={city} setCity={setCity} units={units}/>
            <Content currentWeather={currentWeather} dailyWeather={dailyWeather} errMessage={errMessage} units={units}/>
        </div>
    )
};

export default memo(Components);
