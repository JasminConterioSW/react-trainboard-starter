import React from 'react';

interface Props {
    dropdownName: string;
    options: string[];
}

const Selector: React.FC<Props> = ({ dropdownName, options }) => {
    return (
        <div>
            <h2>{dropdownName}</h2>
            <select>
                {options.map(option => (<option
                    key = { option }
                    value = { option } >{option}
                </option>))}
            </select>
        </div>

    );
};

export default Selector;