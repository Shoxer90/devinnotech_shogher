import { memo } from "react";
import HourlyWeatherItem from "./HourlyWeatherItem";

const HourlyWeather = ({daily, units})=> {

    return (
        <div>
            {
               daily?.list && daily.list.map((item) => {
                    return <HourlyWeatherItem key={item?.dt} item={item} units={units} />
                })
            }
        </div>
    )
};

export default memo(HourlyWeather);