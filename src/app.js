import React, { Component } from 'react';
import {render} from 'react-dom';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (<p>Hello World from React!</p>);
    }
}
 
render(<App />, document.getElementById('root'));