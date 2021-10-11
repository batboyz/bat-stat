const playersRouter = require('./players.js');
const teamsRouter = require('./teams.js');

module.exports = {
  players: playersRouter,
  teams: teamsRouter
}