const db = require('../database.js');

module.exports = {
  getById: async (id) => {
    const player = await db.query(`SELECT players.*, teams.name AS team FROM players INNER JOIN teams ON players.team_id=teams.id AND players.id=${id};`).catch(err => 0);
    if (!player) {
      return [];
    }
    return player;
  },

  getByName: async (name) => {
    const player = await db.query(`SELECT players.*, teams.name AS team FROM players INNER JOIN teams ON players.team_id=teams.id AND players.name LIKE CONCAT('%', '${name}', '%')`).catch(err => 0);
    if (!player) {
      return [];
    }
    return player;
  },

  getAll: async () => {
    const players = await db.query(`SELECT players.*, teams.name AS team FROM players INNER JOIN teams ON players.team_id=teams.id`).catch(err => 0);
    if (!players) {
      return [];
    }
    return players;
  },

  add: async ({ name, team, position }) => {
    // TODO: check first if team exists, if it doenst exist create it. OR in the UI just display the list of teams so no typo creations (I like that better)
    console.log(name, team, position)
    console.log(`INSERT INTO players (name, team_id, position) VALUES ('${name}', (SELECT id FROM teams WHERE name='${team}'), '${position}');`)
    const players = await db.query(`INSERT INTO players (name, team_id, position) VALUES ('${name}', (SELECT id FROM teams WHERE name='${team}'), '${position}');`).catch(err => console.log(err));
    if (!players) {
      return [];
    }
    return players;
  }
}