import React, { Component } from 'react';

class MissingPlayers extends Component {
  state = {
    name: '',
  }
  updateName = val => {
    this.setState({
      name: val
    })
  }
  resetName = () => {
    this.setState({
      name: ''
    })
  }
  render() {
    const { handleAddPlayer, handleRemovePlayer, setReady, players } = this.props;
    return (
      <div className="App-missingPlayers">
        <div>
          <div className="baseline">
            <h1>Zung-Jung scorer</h1>
          </div>
          <div className="logo">
            <span>🀀</span>
            <span>🀁</span>
            <span>🀂</span>
            <span>🀃</span>
          </div>
          <ul>
            {players.map(player => <li><span>{player.name}</span> <button onClick={handleRemovePlayer.bind(null, player.name)}>x</button></li>)}
          </ul>
          {players.length < 4 ?
          <form onSubmit={(e) => {
            e.preventDefault();
            if (!this.state.name) return
            handleAddPlayer(this.state.name)
            this.resetName();
          }}>
            <label>Add player</label>
            <input type="text" value={this.state.name} onChange={e => this.updateName(e.target.value)}/>
            <button type="submit">Add</button>
          </form>
          :
          <button onClick={setReady}>Start</button>
          }
        </div>
      </div>
    )
  }
}


export default MissingPlayers;
