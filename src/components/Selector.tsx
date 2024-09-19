import React from 'react';
import { StationDetails } from '../models/stationDetails';

interface Props {
    dropdownName: string;
    options: StationDetails[];
    id: string;
}

const Selector: React.FC<Props> = ({ dropdownName, options, id }) => {
    return (
        <div>
            <h2>{dropdownName}</h2>
            <select id = { id } name = { dropdownName.replace(/\s/g, '') }>
                {options.map(option => (<option
                    key = { option.crs }
                    value = { option.crs }>{option.name}
                </option>))}
            </select>
        </div>
    );
};

export default Selector;