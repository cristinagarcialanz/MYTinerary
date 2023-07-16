import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

function SearchCities({ searchTerm, onSearchTermChange }) {
  return (
    <div className='inputSearch'>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchTermChange(e.target.value)}
        placeholder="Search cities"
      />
      <SearchIcon />
    </div>
  );
}

export default SearchCities;