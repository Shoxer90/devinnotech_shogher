import { memo, useState } from "react";
import styles from "./index.module.scss"

const SearchTab = ({ searchCity , city, setCity}) => {

    const handleChangeCity = (e) => {
        setCity(e.target.value)
    };

    const handleSearchCity = () => {
        searchCity(city)
    }


    return (
        <div className={styles.search}>
            <input
                type="text"
                value={city}
                onChange={(e) => handleChangeCity(e)}
                placeholder="City"
                name="city"
            />
            <button onClick={handleSearchCity}>Search city</button>
        </div>
    )
};

export default memo(SearchTab);