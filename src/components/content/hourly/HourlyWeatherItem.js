import { memo, useEffect, useState } from "react";
import styles from "../index.module.scss";
import Imagefield from "../../image/Imagefield";

const HourlyWeatherItem = ({item, units})=> {
    const [hours, setHours] = useState("");

    const setDate = () => {
        let date = new Date(item?.dt_txt)
        let data = `${date.getHours()} : ${date.getMinutes()} :  ${date.getSeconds()}`
        return setHours(data)
    };

    useEffect(() => {
        setDate()
    }, []);

    return (
        <div className={styles.daily_item}>
         <div>{item?.main?.temp} <span>{units!=="imperial"? "°C" : "°F"}</span></div>
         <div>{item?.dt_txt.slice(-9, item?.dt_txt?.length)}</div>
         <Imagefield current={item} style={{height:"40px", width:"40px"}}/>
        </div>
    )
};

export default memo(HourlyWeatherItem);