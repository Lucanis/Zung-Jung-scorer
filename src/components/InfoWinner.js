import React from 'react';

const InfoWinner = ({ players, winner, winBy, score, round, discardFrom, handleWin, handleWinBy, handleDiscardFrom, handleScore, handleEndRound, handleClose }) => {
  return (
    <div>
      <h1 className="title title--underline">Ajout Résultat - round {round}</h1>
      <div>
        <h3>Gagnant :</h3>
        {players.map(player =>
          <button className={player.name === winner ? 'active' : ''} onClick={handleWin.bind(null, player.name)}>
            {player.name}
          </button>
        )}
      </div>
      {winner ?
      <div>
        <h3>Par :</h3>
        <button className={winBy === 'discard' ? 'active': ''} onClick={handleWinBy.bind(null, 'discard')}>défausse</button>
        <button className={winBy === 'self' ? 'active': ''} onClick={handleWinBy.bind(null, 'self')}>pioche</button>
      </div>
      : null}
      {winBy === 'discard' ?
      <div>
        <h3>Sur defausse de :</h3>
        {players
          .filter(player => player.name !== winner)
          .map(player =>
          <button className={discardFrom === player.name ? 'active' : ''} onClick={handleDiscardFrom.bind(null, player.name)}>
            {player.name}
          </button>
        )}
      </div>
      : null}
      <div>
        <h3>Score :</h3>
        <input type="number" value={score} onChange={(e) => handleScore(e.target.value)}/>
      </div>
      <div>
        <button className="button-add" onClick={handleEndRound} disabled={!(winner && winBy && score > 0)}>Valider</button>
        <button className="hide-scorer-button" onClick={handleClose}>close</button>
      </div>
    </div>
  )
}

export default InfoWinner
