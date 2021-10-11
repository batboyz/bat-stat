const models = require('../models');

module.exports = {
  getById: async (id) => models.teams.getById(id),
  getByName: async (name) => models.teams.getByName(name),
  getAll: async () => models.teams.getAll()
}