import { useState, useEffect, ChangeEvent } from 'react';

import { STitle, SAppContainer } from './style/globalStyle';

import CardList from './components/card-list';
import SearchBox from './components/search-box';
import { MonsterProps } from './types/types';

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
    const newFilteredMonster = monster.filter((monster: MonsterProps) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    setFilteredMonster(newFilteredMonster);
  }, [monster, searchField]);

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchFieldString = e.target.value.toLocaleLowerCase();
    setSearhField(searchFieldString);
  };

  return (
    <SAppContainer>
      <STitle>Monster Roledex</STitle>
      <SearchBox placeholder='Search Monster' handleChange={onSearchChange} />
      <CardList monster={filteredMonster}></CardList>
    </SAppContainer>
  );
};

export default App;
