import React from "react";

const SearchBar = ({onSearch}) => {
    return (
      <div className="pa2">
        <input
          type="search"
          placeholder="search robot"
          className="pa3 ba b--green bg-lightest-blue"
          onChange={onSearch}
        />
      </div>
    );
}
 
export default SearchBar;