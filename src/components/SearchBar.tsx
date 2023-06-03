import React, { useCallback, useState } from "react";
import "../styles/searchBar.scss";

function SearchBar() {
  const [value, setValue] = useState<string>("");

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event) {
        setValue(event.target.value);
      }
    },
    []
  );

  const handleClear = useCallback(() => {
    setValue("");
  }, []);

  return (
    <div className="searchBar">
      <img src="/assets/icons/magnifier.svg" alt="search" className="magnify" />
      <input
        id="search"
        type="text"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleInputChange(e)
        }
      />
      <img
        src="/assets/icons/close.svg"
        alt="close"
        className="close"
        style={{ display: value !== "" ? "block" : "none" }}
        onClick={() => handleClear()}
      />
    </div>
  );
}

export default SearchBar;
