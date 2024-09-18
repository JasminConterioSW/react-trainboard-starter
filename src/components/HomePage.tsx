import React from 'react';
import Dropdown from './Dropdown';

const HomePage: React.FC = () => {
    return (
        <div>
            Lovely home page
            <Dropdown dropdownName = "Dropdown1"/>
        </div>
    );
};

export default HomePage;