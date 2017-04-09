import React, { Component } from 'react';
import 'normalize.css';
import './App.css';

import finishRound from './scorer';
import Player from './components/Player';
import InfoWinner from './components/InfoWinner';
import Scoring from './components/Scoring';
import History from './components/History';
import MissingPlayers from './components/MissingPlayers';
import Patterns from './components/Patterns';

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
  componentDidMount(){
    this.setState(this.getSavedState)
  }
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
      activePattern: false,
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
  togglePattern = (val) => {
    this.setState({
      activePattern: !this.state.activePattern
    })
  }


  render() {
    const { round, players, roundHistory, ready, activeScorer, activePattern } = this.state;
    return (
      <div className="App">
        {ready && players.length === 4 ?
          <div className="App-scorer">
            <button onClick={this.toggleScorer} className="display-scorer-button">add Score</button>
            <div className={`patterns-col ${activePattern ? 'active' : ''}`}>
              <Patterns closePattern={this.togglePattern}/>
            </div>
            <div className="left-col">
              <History
                roundHistory={roundHistory}
                handlePersistState={this.handlePersistState}
                handleResetState={this.handleResetState}
              />
            </div>
            <div className={`right-col ${activeScorer ? 'active' : ''}`}>
               <Scoring players={players} PlayerComponent={Player} />
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
            <button onClick={this.togglePattern} className="display-pattern-button">{activePattern ? 'close Patterns' :'view Patterns'}</button>
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
