const playersRouter = require('./players.js');
const teamsRouter = require('./teams.js');
const gamesRouter = require('./games.js');

module.exports = {
  players: playersRouter,
  teams: teamsRouter,
  games: gamesRouter
}