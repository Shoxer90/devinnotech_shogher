import { memo } from "react";
import DailyWeatherItem from "./DailyWeatherItem";

const DailyWeather = () => {
    return (
        <div>
            Daily Weather
            <DailyWeatherItem />
        </div>
    )
};

export default memo(DailyWeather);
