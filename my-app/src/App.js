import { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Linda',
          id: '1abc',
        },
        {
          name: 'Frank',
          id: '2abc',
        },
        {
          name: 'Jacky',
          id: '3abc',
        },
      ]
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return <div key={monster.id}>
            <h1>{monster.name}</h1>
          </div>;
        })}
      </div>
    );
  }
}

export default App;
