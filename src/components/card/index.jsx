import styled from 'styled-components';
import PropTypes from 'prop-types';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #95dada;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 25px;
  cursor: pointer;
  -moz-osx-font-smoothing: grayscale;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: transform 0.25s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const Card = ({ id, name, email }) => {
  return (
    <CardContainer>
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt='monster'
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </CardContainer>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default Card;
