import React from "react";

const RandomButton = ({ refresh }) => {
  return (
    <div className="container">
      <button
        onClick={refresh}
        type="button"
        className="btn btn-warning btn-lg"
      >
        <span role="img" aria-label="burger">
          🍔
        </span>
      </button>
    </div>
  );
};

export default RandomButton;
