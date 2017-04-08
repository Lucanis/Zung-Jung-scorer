import React from 'react';

const Scoring = ({ players, PlayerComponent }) => {
  return (
    <div className="scoring">
      <h1 className="title title--underline">Score</h1>
      <div className="PlayerList">
        {players.map(player =>
          <PlayerComponent
            {...player}
          />
        )}
      </div>
    </div>
  )
}

export default Scoring;
