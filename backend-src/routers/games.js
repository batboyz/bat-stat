const express = require('express');

const controllers = require('../controllers');

const router = express.Router();

router.get('/', async (req, res) => {
    const games = await controllers.games.getAll();
    res.send(games);
  })
  
  router.get('/id/:id', async (req, res) => {
    const { id } = req.params;
    const game = await controllers.games.getById(id);
    res.send(game);
  })
  
  router.get('/name/:name', async (req, res) => {
    const { name } = req.params;
    const game = await controllers.games.getByName(name);
    res.send(game);
  })
  
  router.post('/', async (req, res) => {
    controllers.games.add(req.body)
    res.send({ status: 'Success!'})
  })
  
  
  module.exports = router;