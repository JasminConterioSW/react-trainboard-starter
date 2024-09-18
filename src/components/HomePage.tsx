import React from 'react';
import Selector from './Selector';

const HomePage: React.FC = () => {

    return (
        <div>
            <h1>Lovely home page</h1>
            <Selector dropdownName = "Station From"/>
            <Selector dropdownName = "Station To"/>
            <button>Stations picked</button>
        </div>
    );
};

export default HomePage;