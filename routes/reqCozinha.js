const express = require('express');
const router = express.Router();

router.get('/', (req, res , next) => {
    res.render('reqCozinha', {title: 'Requisição Web - San Raphael Hotel'});
} );

module.exports = router