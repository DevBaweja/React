import React from 'react';

const UserInput = props => {
    const inputStyle = {
        width: '50%',
        padding: '1rem',
        margin: '0.5rem',
    };
    return <input type="text" style={inputStyle} onChange={props.change} value={props.current} />;
};
export default UserInput;
