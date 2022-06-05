import Card from '../card';
import { FC } from 'react';
import { SCardListContainer } from './styles';
import { CardListProps } from './types';

const CardList: FC<CardListProps> = ({ monster }) => {
  return (
    <SCardListContainer>
      {monster.map((monster) => {
        const { name, id, email } = monster;
        return <Card key={id} id={id} name={name} email={email} />;
      })}
    </SCardListContainer>
  );
};

export default CardList;
