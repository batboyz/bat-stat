const models = require('../models');

module.exports = {
  getById: async (id) => models.players.getById(id),
  getByName: async (name) => models.players.getByName(name),
  getAll: async () => models.players.getAll()
}