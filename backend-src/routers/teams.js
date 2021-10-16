const express = require('express');

const controllers = require('../controllers');

const router = express.Router();

router.get('/', async (req, res) => {
  const teams = await controllers.teams.getAll();
  res.send(teams);
})

router.get('/id/:id', async (req, res) => {
  const { id } = req.params;
  const team = await controllers.teams.getById(id);
  res.send(team);
})

router.get('/name/:name', async (req, res) => {
  const { name } = req.params;
  const team = await controllers.teams.getByName(name);
  res.send(team);
})

router.post('/', async (req, res) => {
  controllers.teams.add(req.body)
  res.send({ status: 'Success!'})
})


module.exports = router;