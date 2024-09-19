import React, { useEffect, useState } from 'react';
import { stationList } from '../mocks/stationList';
import Selector from './Selector';

const HomePage: React.FC = () => {

    const [stationFromCrs, setStationFromCrs] = useState<string>(stationList[0].crs);
    const [stationToCrs, setStationToCrs] = useState<string>(stationList[1].crs);

    const stationFromSelectorId = 'station-from-selector';
    const stationToSelectorId = 'station-to-selector';

    useEffect(() => {
        //const stationFromSelector = document.getElementById(stationFromSelectorId);
        setStationFromCrs('KGX');
        setStationToCrs('EDB');
    });
    
    const stationsPickedHandler = () => {
        const url = `https://www.lner.co.uk/travel-information/travelling-now/live-train-times/depart/${stationFromCrs}/${stationToCrs}/#LiveDepResults`;
        window.open(url);
    };

    return (
        <div>
            <h1>Lovely home page</h1>
            <form>
                <Selector dropdownName = "Station From" options = { stationList } id = { stationFromSelectorId } />
                <Selector dropdownName = "Station To" options = { stationList } id = { stationToSelectorId } />
                <button onClick = { stationsPickedHandler } >Stations picked</button>
            </form>
        </div>
    );
};

export default HomePage;