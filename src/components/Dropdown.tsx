import React from 'react';

interface Props {
    dropdownName: string;
}

const Dropdown: React.FC<Props> = ({ dropdownName }) => {
    return (
        <div>
            <h1>{dropdownName}</h1>
        </div>
    );
};

export default Dropdown;