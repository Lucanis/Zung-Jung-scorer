import React from 'react';
import svgSprite from '../svg/sprite.css.svg';

const Tile = ({name}) => {
  return (
    <div className="Tile">
      <svg className="Tile-dims">
        <use xlinkHref={`${svgSprite}#${name}`}></use>
      </svg>
    </div>
  );
}

export default Tile;
