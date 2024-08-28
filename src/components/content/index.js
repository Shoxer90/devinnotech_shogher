import { memo } from "react";
import styles from "./index.module.scss";
import CityWeather from "./CityWeather";
import HourlyWeather from "./hourly/HourlyWeather";
import DailyWeather from "./day/index";
const Content = ({dailyWeather, currentWeather, errMessage, units}) => {
    return(
        <div className={styles.content}>
            { currentWeather && dailyWeather ? 
                <>
                    <div className={styles.content_div}>
                        <CityWeather current={currentWeather} />
                        <HourlyWeather daily={dailyWeather} units={units} />
                    </div>
                    <DailyWeather />
                </>:""
            }
                
            {
                errMessage ?<div> {errMessage?.response?.data?.message} </div>: ""
            }
           
        </div>
    )
};

export default memo(Content);
