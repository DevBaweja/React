import React, { useState } from 'react';
import Person from './Person/Person.jsx';
import './App.css';

const App = props => {
    // eslint-disable-next-line
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

    const style = {
        backgroundColor: '#000',
    };
    return (
        <div className="App">
            <h1>I'm React Component</h1>
            <p>{props.title}</p>
            {/* 
                    <div className="persons">
                        <Person name="Jonas" age="20" job="Teacher" />
                        <Person name="Jane" age="12" job="Student">
                            Hobbies: --
                        </Person>
                        <Person name="Mark" age="33" job="Designer" />
                    </div> 
                */}
            <button className="btn" style={style} onClick={switchPersonHandler}>
                View Another Person
            </button>
            <div className="persons">
                <Person
                    name={PersonsState.persons[IndexState.index].name}
                    age={PersonsState.persons[IndexState.index].age}
                    job={PersonsState.persons[IndexState.index].job}
                    click={switchPersonHandler}
                    change={nameChangedHandler}
                />
                {/* <Person
                    name={PersonsState.persons[IndexState.index].name}
                    age={PersonsState.persons[IndexState.index].age}
                    job={PersonsState.persons[IndexState.index].job}
                    click={switchPersonHandler.bind(this, 'Max')}
                />
                <Person
                    name={PersonsState.persons[IndexState.index].name}
                    age={PersonsState.persons[IndexState.index].age}
                    job={PersonsState.persons[IndexState.index].job}
                    click={() => switchPersonHandler('Jon')}
                /> */}
            </div>
        </div>
    );
};

export default App;
