const db = require('../database.js');

module.exports = {
  getById: async (id) => {
    const player = await db.query(`SELECT * FROM players WHERE id=${id}`).catch(err => 0);

    if (!player) {
      return 'Player not found'
    }
    return player;
  },

  getByName: async (name) => {
    const player = await db.query(`SELECT * FROM players WHERE name LIKE '%${name}%';`).catch(err => 0);

    if (!player) {
      return 'Player not found'
    }
    return player;
  },

  getAll: async () => {
    const players = await db.query(`SELECT * FROM players;`).catch(err => 0);

    if (!players) {
      return 'Players not found'
    }
    return players;
  }
}