const db = require('../database.js');

module.exports = {
  getById: async (id) => {
    const player = await db.query(`SELECT players.*, teams.name AS team FROM players INNER JOIN teams ON players.team_id=teams.id AND players.id=${id};`).catch(err => 0);
    if (!player) {
      return 'Player not found'
    }
    return player;
  },

  getByName: async (name) => {
    const player = await db.query(`SELECT players.*, teams.name AS team FROM players INNER JOIN teams ON players.team_id=teams.id AND players.name LIKE CONCAT('%', '${name}', '%')`).catch(err => 0);

    if (!player) {
      return 'Player not found'
    }
    return player;
  },

  getAll: async () => {
    const players = await db.query(`SELECT players.*, teams.name AS team FROM players INNER JOIN teams ON players.team_id=teams.id`).catch(err => 0);

    if (!players) {
      return 'Players not found'
    }
    return players;
  }
}