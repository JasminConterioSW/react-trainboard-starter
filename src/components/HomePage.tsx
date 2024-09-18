import React from 'react';
import Selector from './Selector';

const HomePage: React.FC = () => {
    const stationNames: string[] = ['A', 'B', 'C', 'D', 'E'];

    return (
        <div>
            <h1>Lovely home page</h1>
            <Selector dropdownName = "Station From" options = { stationNames } />
            <Selector dropdownName = "Station To" options = { stationNames }/>
            <button>Stations picked</button>
        </div>
    );
};

export default HomePage;