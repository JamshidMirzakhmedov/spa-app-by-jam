import React from "react";

function Loader(props) {
  return (
    <div className="loader">
      <span
        className="spinner-grow spinner-grow-sm"
        role="status"
        aria-hidden="true"
      ></span>
    </div>
  );
}

export default Loader;
