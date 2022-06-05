import { FC } from 'react';
import { CardProps } from './types';
import { SCardContainer } from './styles';

const Card: FC<CardProps> = ({ id, name, email }) => {
  return (
    <SCardContainer>
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt='monster'
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </SCardContainer>
  );
};

export default Card;
