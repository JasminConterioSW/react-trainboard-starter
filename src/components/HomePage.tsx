import React from 'react';
import { stationList } from '../mocks/stationList';
import Selector from './Selector';

const HomePage: React.FC = () => {

    const stationFromSelectorId = 'station-from-selector';
    const stationToSelectorId = 'station-to-selector';

    const stationsPickedHandler = () => {
        const stationFromSelector = document.getElementById(stationFromSelectorId) as HTMLSelectElement;
        const stationToSelector = document.getElementById(stationToSelectorId) as HTMLSelectElement;
        const stationFromCrs = stationFromSelector.value;
        const stationToCrs = stationToSelector.value;
        const url = `https://www.lner.co.uk/travel-information/travelling-now/live-train-times/depart/${stationFromCrs}/${stationToCrs}/#LiveDepResults`;
        window.open(url);
    };

    return (
        <div>
            <h1>Lovely home page</h1>
            <Selector dropdownName = "Station From" options = { stationList } id = { stationFromSelectorId } />
            <Selector dropdownName = "Station To" options = { stationList } id = { stationToSelectorId } />
            <button onClick = { stationsPickedHandler } >Stations picked</button>
        </div>
    );
};

export default HomePage;