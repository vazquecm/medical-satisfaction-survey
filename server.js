'use strict';

const express = require('express');

const partials = require('partials');

// const models = require('./models/');

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
  res.send({
    status: 'Success'
  });
});

app.get('partials', (req, res) => {
  res.send({

  })
})

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
