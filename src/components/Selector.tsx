import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

interface Props {
    dropdownName: string;
}

const Selector: React.FC<Props> = ({ dropdownName }) => {
    return (
        <div>
            <h2>{dropdownName}</h2>
            <select>
                <option>Station 1</option>
                <option>Station 2</option>
                <option>Station 3</option>
            </select>
        </div>

    );
};

export default Selector;