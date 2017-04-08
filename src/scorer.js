import { head, tail, compose } from './utils';

export const countScore = (gameResult) => {
	const { score, winBy } = gameResult;

	if (!score) throw new Error('boom!')

	if (winBy === 'self' || score <= 25) {
   	return {
   		...gameResult,
   		toPay: Array(3).fill(score)
  	}
   }

  return {
   ...gameResult,
   toPay: [(score * 3) - 50, 25, 25]
  }
}

export const updatePlayers = gameResult => {
 const { winner, toPay, players, discardFrom } = gameResult;
 const updatedPlayers = players.map(player => {
  	if (player.name === winner) {
    	return {
      	...player,
      	score: player.score + toPay.reduce((acc, next) => acc + next, 0)
      }
    }
  	if (player.name === discardFrom) {
    	return {
      	...player,
        score: player.score - head(toPay)
      }
    }
  	return {
    	...player,
      score: player.score - head(tail(toPay))
    }
  })
 return {
 	...gameResult,
  players: updatedPlayers
 }
}

export const orderPlayer = gameResult => {
	const { players } = gameResult;

  return {
  	...gameResult,
    players: players.sort((a,b) => a.score - b.score).reverse()
  }
}

export const gameResult = (players, roundInfos) => {
	return {
  ...roundInfos,
  players
  }
}

export const finishRound = compose(orderPlayer, updatePlayers, countScore, gameResult)

export default finishRound
