import React from 'react';

import './style.css';

import Card from '../card';

export default function CardList(props) {
  return (
    <div className="card-list">
      {props.monster.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
}
