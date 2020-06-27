import React, { Component } from 'react';
import Person from './Person/Person.jsx';
import './App.css';

class App extends Component {
    state = {
        persons: [
            { name: 'Jonas', age: 20, job: 'Teacher' },
            { name: 'Jane', age: 12, job: 'Student' },
            { name: ' Mark', age: 33, job: 'Designer' },
        ],
        index: 0,
    };
    render() {
        return (
            <div className="App">
                <h1>I'm React Component</h1>
                <p>{this.props.title}</p>
                {/* 
                    <div className="persons">
                        <Person name="Jonas" age="20" job="Teacher" />
                        <Person name="Jane" age="12" job="Student">
                            Hobbies: --
                        </Person>
                        <Person name="Mark" age="33" job="Designer" />
                    </div> 
                */}
                <button className="btn" onClick={this.switchPersonHandler}>
                    View Another Person
                </button>
                <div className="persons">
                    <Person
                        name={this.state.persons[this.state.index].name}
                        age={this.state.persons[this.state.index].age}
                        job={this.state.persons[this.state.index].job}
                    />
                </div>
            </div>
        );
    }

    switchPersonHandler = () => {
        // this.state.index = Math.floor(Math.random() * this.state.persons.length);
        this.setState({ index: Math.floor(Math.random() * this.state.persons.length) });
    };
}

export default App;
