import React from 'react';

import Tile from './Tile';

const Pattern = ({ tiles, name, label, score, type }) => {
  return (
    <div className={`Pattern${type ? ` Pattern--${type}` : ''}`}>
      <div className="Pattern-score">
        {score}
      </div>
      <div className="Pattern-tiles">
        {tiles.map(tile => <Tile name={tile} />)}
      </div>
      <div className="Pattern-name">
        {name}
        <div className="Pattern-label">
          {label}
        </div>        
      </div>

    </div>
  );
}

export default Pattern;
