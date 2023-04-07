import { Component } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import StarRating from './components/star-rating.component'

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users') 
    .then((response) => response.json())
    .then((users) => 
      this.setState(
        () => {
          return { monsters: users };
        },
        () => {
          console.log(this.state);
        }
      )
    );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField }
  });
};

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        {/* <StarRating /> */}
        <SearchBox 
          className='monsters-search-box'
          onChangeHandler={onSearchChange} 
          placeholder='Search Monsters...'
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
