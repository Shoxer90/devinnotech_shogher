import { memo,} from "react";

const ImageField = ({current, style}) => {


    return(
        current?.weather.map((item) => {
            return <img  style={style} src={`http://openweathermap.org/img/wn/${item.icon}@4x.png`} />
        }) 
    )
} 

export default memo(ImageField);
// 