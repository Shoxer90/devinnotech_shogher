import { memo } from "react";
import styles from "./index.module.scss";
import SearchTab from "../search";
import FahrenheitCelsiusSelect from "./select/index";


const NavBar = ({searchCity, toggleUnits,city, units, setCity}) => {
    return (
        <div className={styles.navbar}>
            <SearchTab searchCity={searchCity} city={city} setCity={setCity} />
            <FahrenheitCelsiusSelect toggleUnits={toggleUnits} units={units} />
        </div>
    )
};

export default memo(NavBar);
