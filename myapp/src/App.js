import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja'

class App extends Component {
  state = {
    ninjas: [
      { name: 'Ryu', age: 33, belt: 'black', id: 1 },
      { name: 'Yoshi', age: 30, belt: 'green', id: 2 },
      { name: 'Crystal', age: 20, belt: 'pink', id: 3 }
    ]
  }
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja]
    this.setState({
      ninjas: ninjas
    })
  }
  render() {
    return (
      <div className="App">
        <h1>first react app</h1>
        <p>we bllsss</p>
        <Ninjas ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }

}

export default App;