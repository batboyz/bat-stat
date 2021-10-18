const models = require('../models');

module.exports = {
  getById: async (id) => models.games.getById(id),
  getByName: async (name) => models.games.getByName(name),
  getAll: async () => models.games.getAll(),
  add: async (data) => models.games.add(data)
  
}