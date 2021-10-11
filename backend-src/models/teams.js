const db = require('../database.js');

module.exports = {
  getById: async (id) => {
    const team = await db.query(`SELECT * FROM teams WHERE id=${id}`).catch(err => 0);

    if (!team) {
      return 'Team not found'
    }
    return team;
  },

  getByName: async (name) => {
    const team = await db.query(`SELECT * FROM teams WHERE name LIKE '%${name}%';`).catch(err => 0);

    if (!team) {
      return 'Team not found'
    }
    return team;
  },

  getAll: async () => {
    const teams = await db.query(`SELECT * FROM teams;`).catch(err => 0);

    if (!teams) {
      return 'Teams not found'
    }
    return teams;
  }
}