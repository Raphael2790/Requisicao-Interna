const express = require('express');
const router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Requisição Web - San Raphael Hotel'});
});

module.exports = router;
