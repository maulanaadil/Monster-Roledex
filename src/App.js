import { useState, useEffect } from 'react';
import styled from 'styled-components';

import CardList from './components/card-list';
import SearchBox from './components/search-box';

const AppContainer = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-family: 'Bigelow Rules', cursive;
  font-size: 72px;
  color: #0ccac4;
`;

const App = () => {
  const [monster, setMonster] = useState([]);
  const [searchField, setSearhField] = useState('');
  const [filteredMonster, setFilteredMonster] = useState(monster);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonster(users));
  }, []);

  useEffect(() => {
    const newFilteredMonster = monster.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    setFilteredMonster(newFilteredMonster);
  }, [monster, searchField]);

  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLocaleLowerCase();
    setSearhField(searchFieldString);
  };

  return (
    <AppContainer>
      <Title>Monster Roledex</Title>
      <SearchBox placeholder='Search Monster' handleChange={onSearchChange} />
      <CardList monster={filteredMonster}></CardList>
    </AppContainer>
  );
};

export default App;
