import React, { useCallback } from "react";
import "../styles/searchBar.scss";
import { useFilter } from "../context/FilterContext";

function SearchBar() {
  const { filter, updateFilter } = useFilter();

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event) {
        updateFilter(event.target.value);
      }
    },
    // eslint-disable-next-line
    []
  );

  const handleClear = useCallback(() => {
    updateFilter("");
    // eslint-disable-next-line
  }, []);

  return (
    <div className="searchBar">
      <img src="/assets/icons/magnifier.svg" alt="search" className="magnify" />
      <input
        id="search"
        type="text"
        value={filter}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleInputChange(e)
        }
      />
      <img
        src="/assets/icons/close.svg"
        alt="close"
        className="close"
        style={{ display: filter !== "" ? "block" : "none" }}
        onClick={() => handleClear()}
      />
    </div>
  );
}

export default SearchBar;
