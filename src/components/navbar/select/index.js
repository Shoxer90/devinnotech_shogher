import { memo } from "react";

const FahrenheitCelsiusSelect = ({toggleUnits, units}) => {

    return(
        <div>
            <select onChange={(e)=> toggleUnits(e.target.value)} value={units}>
                <option value="imperial">Fahrenheit</option>
                <option value="metric">Celsius</option>
            </select>

        </div>
    )
};

export default memo(FahrenheitCelsiusSelect);
