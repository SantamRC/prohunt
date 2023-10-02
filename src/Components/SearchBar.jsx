import React from "react";
import { TextField, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../Redux/actions";

import SearchService from "../Services/search";

function SearchBar({ searchString, setSearchString }) {
  const dispatch = useDispatch();
  const handleSearchClick = async () => {
    const response = await SearchService(searchString);
    console.log(response.results);
    dispatch(setSearch(response.results));
  };

  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        onChange={(e) => setSearchString(e.target.value)}
      />
      <Button variant="contained" onClick={handleSearchClick}>
        Search
      </Button>
    </div>
  );
}

export default SearchBar;
