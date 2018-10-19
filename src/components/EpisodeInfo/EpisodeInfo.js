import React from "react";
import "./EpisodeInfo.css";

const EpisodeInfo = ({ episodeName, episodeNum, trivia }) => {
  return (
    <div>
      <div className="container episodeContainer">
        <h3>Episode Info:</h3>
        <hr />
        <h4>
          Name: {episodeName}({episodeNum})
        </h4>
        <ul>
          {trivia.map(trivia => (
            <li>{trivia}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EpisodeInfo;
