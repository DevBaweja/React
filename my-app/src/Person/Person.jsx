import React from 'react';
import './Person.css';
const person = props => {
    return (
        <div className="Person">
            <h2 className="Person__heading" onClick={props.click}>
                Another Person
            </h2>
            <ul className="Person__list">
                <li>Name: {props.name}</li>
                <li>Age: {props.age}</li>
                <li>Job: {props.job}</li>
                <li>{props.children}</li>
            </ul>
            <input type="text" onChange={props.change} value={props.name} />
        </div>
    );
};

export default person;
