const express = require('express');
const router = express.Router();

router.get('/', (req, res , next) => {
    res.render('new', {title: 'Nova página'});
} );

module.exports = router