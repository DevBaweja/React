import React, { useState } from 'react';
import Person from './Person/Person.jsx';
import './App.css';

const App = props => {
    // Hooks
    const [PersonsState, setPersonsState] = useState({
        persons: [
            { name: 'Jonas', age: 20, job: 'Teacher' },
            { name: 'Jane', age: 12, job: 'Student' },
            { name: ' Mark', age: 33, job: 'Designer' },
        ],
    });
    const [IndexState, setIndexState] = useState({
        index: 0,
    });

    const [ToggleState, setToggleState] = useState({
        toggle: false,
    });

    // Handlers
    const switchPersonHandler = args => {
        setIndexState({ index: Math.floor(Math.random() * PersonsState.persons.length) });
        console.log(args);
    };

    const nameChangedHandler = event => {
        const persons = [...PersonsState.persons];
        persons[IndexState.index].name = event.target.value;
        // console.log(persons);

        setPersonsState({
            persons,
        });
        // console.log(PersonsState);

        // console.log(event);
    };

    const togglePersonsHandler = () => {
        setToggleState({ toggle: !ToggleState.toggle });
    };

    // Renders
    const renderPersons = () => {
        if (ToggleState.toggle) {
            return (
                <Person
                    name={PersonsState.persons[IndexState.index].name}
                    age={PersonsState.persons[IndexState.index].age}
                    job={PersonsState.persons[IndexState.index].job}
                    click={switchPersonHandler}
                    change={nameChangedHandler}
                />
            );
        }
    };
    const style = {
        backgroundColor: '#000',
    };
    return (
        <div className="App">
            <h1>I'm React Component</h1>
            <p>{props.title}</p>

            <button className="btn" style={style} onClick={togglePersonsHandler}>
                Toggle Persons
            </button>
            <div className="persons">{renderPersons()}</div>
        </div>
    );
};

export default App;
