import React, { Component } from 'react';
import './App.css';
import CardList from './components/card-list';
import SearchBox from './components/search-box';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monster: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monster, searchField } = this.state;
    const filteredMonster = monster.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1 className="title">Monster Roledex</h1>
        <SearchBox
          placeholder="Search Monster"
          handleChange={this.handleChange}
        />
        <CardList monster={filteredMonster}></CardList>
      </div>
    );
  }
}

export default App;
