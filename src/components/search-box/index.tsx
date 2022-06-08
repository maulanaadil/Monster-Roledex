import { FC } from 'react';
import { SearchBoxProps } from './types';
import { SSearchInput } from './styles';

const SearchBox: FC<SearchBoxProps> = ({
  placeholder,
  handleChange,
  setValue,
}) => (
  <SSearchInput
    type='search'
    className='search'
    placeholder={placeholder}
    onChange={handleChange}
    value={setValue}
  />
);

export default SearchBox;
