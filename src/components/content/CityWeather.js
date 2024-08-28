import { memo, useEffect, useState } from "react";
import Imagefield from "../image/Imagefield";

const CityWeather = ({current})=> {
    const [image, setImage] = useState([]);

    useEffect(() =>{
        current && setImage(current?.weather)
    }, [current]);

    return (
        <div>
            <h2>{current?.name}</h2>
            <h3>{current?.main?.temp}</h3>
             {/* <Imagefield current={current} /> */}
            {/* {image?.length ? <Imagefield current={image} style={{height:"240px", width:"240px"}}/> : ""} */}

        </div>
    )
};

export default memo(CityWeather);