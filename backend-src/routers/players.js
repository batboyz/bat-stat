const express = require('express');

const controllers = require('../controllers');

const router = express.Router();

router.get('/', async (req, res) => {
  const players = await controllers.players.getAll();
  res.send(players);
})

router.get('/id/:id', async (req, res) => {
  const { id } = req.params;
  const player = await controllers.players.getById(id);
  res.send(player);
})

router.get('/name/:name', async (req, res) => {
  const { name } = req.params;
  const player = await controllers.players.getByName(name);
  res.send(player);
})

router.post('/', async (req, res) => {
  controllers.players.add(req.body)
  res.send({ status: 'Success!'})
})


module.exports = router;