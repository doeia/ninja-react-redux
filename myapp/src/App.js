import React, { Component } from 'react';
import Ninjas from './Ninjas';

class App extends Component {
  state = {
    ninjas: [
      { name: 'Ryu', age: 33, belt: 'black', id: 1 },
      { name: 'Yoshi', age: 30, belt: 'green', id: 2 },
      { name: 'Crystal', age: 20, belt: 'pink', id: 3 }
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>first react app</h1>
        <p>we bllsss</p>
        <Ninjas ninjas={this.state.ninjas} />
      </div>
    );
  }

}

export default App;