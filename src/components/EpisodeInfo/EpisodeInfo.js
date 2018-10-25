import React from "react";
import styled from "styled-components";
import "./EpisodeInfo.css";

const EpisodeContainer = styled.div`
  border: 1px solid #f7da1e;
  padding: 5px;
`;

const EpisodeInfo = ({ episodeName, episodeNum, trivia, id }) => {
  return (
    <div className="container">
      <EpisodeContainer>
        <h3>Episode Info:</h3>
        <hr />
        <h4>
          Name: {episodeName} ({episodeNum})
        </h4>
        <ul>
          {trivia.map(trivia => (
            <li key={trivia}>{trivia}</li>
          ))}
        </ul>
      </EpisodeContainer>
    </div>
  );
};

export default EpisodeInfo;
