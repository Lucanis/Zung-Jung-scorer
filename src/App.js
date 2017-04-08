import React, { Component } from 'react';
import 'normalize.css';
import './App.css';

import finishRound from './scorer';
import Player from './components/Player'
import InfoWinner from './components/InfoWinner'
import Scoring from './components/Scoring'
import History from './components/History'
import MissingPlayers from './components/MissingPlayers'

const initialState = {
  ready: false,
  activeScorer: false,
  round: {
    winner: undefined,
    winBy: undefined,
    discardFrom: undefined,
    score: 0,
    round: 1,
  },
  players: [],
  roundHistory: []
}

class App extends Component {
  state = initialState;

  addPlayer = player => {
    this.setState({
      players: [].concat(this.state.players, { name: player, score: 0 })
    })
  }
  removePlayer = player => {
    this.setState({
      players: [].concat(this.state.players.filter(el => el.name !== player))
    })
  }
  setReady = () => {
    this.setState({
      ready: true,
    })
  }
  getSavedState = () => {
    return JSON.parse(localStorage.getItem('scorer') || JSON.stringify(this.state));
  }
  componentDidMount(){
    this.setState(this.getSavedState)
  }
  handlePersistState = () => {
    localStorage.setItem('scorer', JSON.stringify(this.state));
  }
  handleResetState = () => {
    localStorage.setItem('scorer', null);
    this.setState(initialState)
  }
  handleEndRound = () => {
    const results = finishRound(this.state.players, this.state.round);
    document.body.classList.toggle('no-overflow')
    this.setState({
      activeScorer: false,
      round: {
        winner: undefined,
        winBy: undefined,
        discardFrom: undefined,
        score: 0,
        round: this.state.round.round + 1,
      },
      players: results.players,
      roundHistory: [].concat(this.state.roundHistory, results)
    })
  }
  setWinner = name => {
    const { round } = this.state;
    this.setState({
      round: {
        ...round,
        winner: round.winner === name ? undefined : name,
        winBy: undefined
      }
    })
  }
  setWinBy = method => {
    const { round } = this.state;
    this.setState({
      round: {
        ...round,
        winBy: method,
        discardFrom: undefined,
      }
    })
  }
  setDiscardFrom = name => {
    const { round } = this.state;
    this.setState({
      round: {
        ...round,
        discardFrom: round.discardFrom === name ? undefined : name,
      }
    })
  }
  setScore = val => {
    const { round } = this.state;
    this.setState({
      round: {
        ...round,
        score: parseInt(val, 10),
      }
    })
  }

  toggleScorer = (val) => {
    document.body.classList.toggle('no-overflow')
    this.setState({
      activeScorer: !this.state.activeScorer
    })
  }

  render() {
    const { round, players, roundHistory, ready, activeScorer } = this.state;
    return (
      <div className="App">
        {ready && players.length === 4 ?
          <div className="App-scorer">
            <button onClick={this.toggleScorer} className="display-scorer-button">add Score</button>
            <div className="left-col">
              <Scoring players={players} PlayerComponent={Player} />
              <History
                roundHistory={roundHistory}
                handlePersistState={this.handlePersistState}
                handleResetState={this.handleResetState}
              />
            </div>
            <div className={`right-col ${activeScorer ? 'active' : ''}`}>
               <InfoWinner
                 players={players}
                 handleWin={this.setWinner}
                 handleWinBy={this.setWinBy}
                 handleDiscardFrom={this.setDiscardFrom}
                 handleScore={this.setScore}
                 handleEndRound={this.handleEndRound}
                 handleClose={this.toggleScorer}
                 {...round}
               />
            </div>
          </div>
        :
          <MissingPlayers
            players={players}
            handleAddPlayer={this.addPlayer}
            setReady={this.setReady}
            handleRemovePlayer={this.removePlayer}
          />
        }
      </div>
    );
  }
}

export default App;
