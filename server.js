const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = process.env.PORT || 4000;

const router = require('./backend-src/routers');

app.use(morgan('dev'));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/player', router.players)
app.use('/team', router.teams)

app.listen(port, () => console.log(`App is listening on port ${port}`))
