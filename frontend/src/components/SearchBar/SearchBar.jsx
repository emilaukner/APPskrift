import React from "react";
import TextField from '@mui/material/TextField';

const SearchBar = ({handleSearch}) => { 

    const onChange = (e) => {
        handleSearch(e.target.value);
    }

  return (
    <>
      <TextField 
        id="searchBar" 
        onChange={onChange} 
        label="Søk etter oppskrifter" 
        fullWidth 
        size="small"/>
    </> 
  );
};

export default SearchBar;