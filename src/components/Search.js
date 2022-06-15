import React, { useState } from "react";

function Search({ cb = Function.prototype }) {
  const [value, setValue] = useState("");

  const handleKey = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = (e) => {
    cb(value);
    e.preventDefault();
  };
  return (
    <div>
      <form className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onKeyDown={handleKey}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button
          className="btn  btn-outline-info"
          disabled={!value}
          onClick={handleSubmit}
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
