import React, { Fragment } from "react";

const SearchBar = ({ city, setCity, onSubmit }) => {
  return (
    <Fragment>
      <div className="searchContainer">
        <div className="searchBar">
          <form onSubmit={(event) => onSubmit(event)}>
            <input
              type="text"
              placeholder="New York"
              value={city}
              name="city"
              autoFocus
              onChange={(event) => setCity(event.target.value)}
            ></input>
          </form>
          <i className="fas fa-home searchHome"></i>
          <i className="fas fa-search searchIcon"></i>
        </div>
      </div>
    </Fragment>
  );
};

export default SearchBar;
