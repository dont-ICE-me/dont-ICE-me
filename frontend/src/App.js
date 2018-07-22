import React, { Component } from 'react';
import Navigation from './Navigation';
import Content from './Content';

class App extends Component {
    render() {
        return (
          <div>
           < Navigation/> 
           <Content />
          </div>
        );
    }
}

export default App;
