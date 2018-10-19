import React from "react";

const RandomButton = ({ refresh }) => {
  return (
    <button onClick={refresh} type="button" class="btn btn-warning">
      New Burger
    </button>
  );
};

export default RandomButton;
