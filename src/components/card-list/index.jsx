import styled from 'styled-components';
import PropTypes from 'prop-types';

import Card from '../card';

const CardListContainer = styled.div`
  width: 85vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
`;

const CardList = ({ monster }) => {
  return (
    <CardListContainer>
      {monster.map((monster) => {
        const { name, id, email } = monster;
        return <Card key={id} id={id} name={name} email={email} />;
      })}
    </CardListContainer>
  );
};

CardList.propTypes = {
  monster: PropTypes.object.isRequired,
};

export default CardList;
