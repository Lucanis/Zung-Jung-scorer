import React from 'react';

const History = ({ roundHistory, handlePersistState, handleResetState }) => {
  return (
    <div className="history">
      <h1 className="title title--underline">History</h1>
        <table>
          <thead>
            <tr>
              <th>round</th>
              <th>winner</th>
              <th>score</th>
              <th>by</th>
            </tr>
          </thead>
          <tbody>
            {roundHistory.map(round =>
              <tr>
                <td>{round.round}</td>
                <td>{round.winner}</td>
                <td>{round.score}</td>
                <td>{round.winBy === 'self' ? round.winBy : `${round.winBy} from ${round.discardFrom}`}</td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="history-buttons">
          <button onClick={handlePersistState}>save</button>
          <button onClick={handleResetState}>reset</button>
        </div>
    </div>
  )
}

export default History;
