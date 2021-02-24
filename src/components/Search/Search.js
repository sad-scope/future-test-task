import React from "react";
import { SearchIcon, SearchInput, SearchWhrapper } from "./Search.elements";

function Search({ query, onSearch, onChange }) {
  const searchHandler = (e) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <SearchWhrapper>
      <SearchInput placeholder="Поиск" value={query} onChange={onChange} />
      <SearchIcon onClick={searchHandler} />
    </SearchWhrapper>
  );
}

export default Search;
