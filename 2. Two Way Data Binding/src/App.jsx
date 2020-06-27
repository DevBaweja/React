import React from 'react';

import UserInput from './UserInput/UserInput.jsx';
import UserOutput from './UserOutput/UserOutput.jsx';
import './App.css';

class App extends React.Component {
    state = {
        name: 'Dev',
    };

    changeNameHandler = event => {
        this.setState({
            name: event.target.value,
        });
    };

    render() {
        return (
            <div className="App">
                <UserInput change={this.changeNameHandler} current={this.state.name} />
                <UserOutput name={this.state.name} />
            </div>
        );
    }
}

export default App;
