const db = require('../database.js');

module.exports = {
  getById: async (id) => {
    const player = await db.query(`SELECT players.*, teams.name AS team FROM players INNER JOIN teams ON players.team_id=teams.id AND players.id=${id};`).catch(err => console.log(err));
    if (!player) {
      return [];
    }
    return player;
  },

  getByName: async (name) => {
    const player = await db.query(`SELECT players.*, teams.name AS team FROM players INNER JOIN teams ON players.team_id=teams.id AND players.name LIKE CONCAT('%', '${name}', '%')`).catch(err => console.log(err));
    if (!player) {
      return [];
    }
    return player;
  },

  getAll: async () => {
    const players = await db.query(`SELECT players.*, SUM(game_stats.at_bats) AS at_bats, SUM(game_stats.strikeouts) AS strikeouts, SUM(game_stats.walks) AS walks, SUM(game_stats.hits) AS hits, SUM(game_stats.doubles) AS doubles, SUM(game_stats.triples) AS triples, SUM(game_stats.home_runs) AS home_runs, SUM(game_stats.RBI) AS RBI, SUM(game_stats.runs) AS runs, teams.name AS team FROM players INNER JOIN game_stats ON players.id=game_stats.player_id INNER JOIN teams ON players.team_id=teams.id GROUP BY players.id`).catch(err => console.log(err));
    if (!players) {
      return [];
    }
    return players;
  },

  add: async ({ name, team, position }) => {
    // TODO: check first if team exists, if it doenst exist create it. OR in the UI just display the list of teams so no typo creations (I like that better)

    const players = await db.query(`INSERT INTO players (name, team_id, position) VALUES ('${name}', (SELECT id FROM teams WHERE name='${team}'), '${position}');`).catch(err => console.log(err));
    if (!players) {
      return [];
    }
    return players;
  }
}