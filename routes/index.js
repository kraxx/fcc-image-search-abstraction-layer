const express = require('express'),
      router = express.Router();

const imgur = require('../services/imgur'),
      history = require('../models/history');

router.get('/', (req, res) => {
  res.render('./pages/index');
});

router.get('/latest', (req, res) => {
  history.find({}, 'term when -_id').sort('-when').limit(10).then(results => {
    res.json(results);
  });
});

router.get('/search/:q', (req, res) => {
  imgur.getImage(req.params.q, req.query.offset).then(searchResults => {
    new history({ term: req.params.q }).save();
    res.json(searchResults);
  });
});

module.exports = router;
