import React from 'react';

import './style.css';

export default function SearchBox({ placeholder, handleChange }) {
  return (
    <input
      type="search"
      className="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
}
