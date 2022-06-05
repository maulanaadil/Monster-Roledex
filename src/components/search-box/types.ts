import { ChangeEvent } from 'react';

export type SearchBoxProps = {
  placeholder: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
