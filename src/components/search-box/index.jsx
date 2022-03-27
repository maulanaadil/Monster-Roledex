import styled from 'styled-components';
import PropTypes from 'prop-types';

const SearchInput = styled.input`
  -webkit-appearance: none;
  border: none;
  outline: none;
  padding: 10px;
  width: 150px;
  line-height: 30px;
  margin-bottom: 30px;
`;

const SearchBox = ({ placeholder, handleChange }) => (
  <SearchInput
    type='search'
    className='search'
    placeholder={placeholder}
    onChange={handleChange}
  />
);

SearchBox.propTypes = {
  placeholder: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SearchBox;
