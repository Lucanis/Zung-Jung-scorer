import React from 'react';

const Player = ({ name, score }) => {
  return (
    <div className="Player">
      <span className="Player-score">{score}</span>
      <span className="Player-name">{name}</span>
    </div>
  )
}

export default Player;
