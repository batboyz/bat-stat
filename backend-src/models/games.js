const db = require("../database.js");

module.exports = {
  getAll: async () => {
    const games = await db.query(``);
    if (!games) {
      return [];
    }
    return games;
  },
  getByID: async (id) => {
    const game = await db.query(``);
    if (!game) {
      return [];
    }
    return game;
  },
  getByName: async (name) => {
    const game = await db.query(``);
    if (!game) {
      return [];
    }
    return game;
  },
  add: async ({ homeTeam, awayTeam, date }) => {
    const insert = db.query(``);
    if (!insert) {
        return [];
    }
    return insert;
  }
};
