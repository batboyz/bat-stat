const models = require('../models');

module.exports = {
  getById: async (id) => models.teams.getById(id),
  getByName: async (name) => models.teams.getByName(name),
  getAll: async () => models.teams.getAll(),
  add: async (data) => models.teams.add(data)
}