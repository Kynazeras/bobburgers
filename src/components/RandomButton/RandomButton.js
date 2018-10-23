import React from "react";

const RandomButton = ({ refresh }) => {
  return (
    <button onClick={refresh} type="button" className="btn btn-dark">
      <span role="img" aria-label="burger">
        🍔
      </span>
    </button>
  );
};

export default RandomButton;
