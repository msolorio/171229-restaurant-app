const express = require('express');
const router = express.Router();
const locationsRouter = require('./locationsRouter');

router.get('/', (req, res) => res.render('home'));
router.get('/about', (req, res) => res.render('about'));
router.use('/locations', locationsRouter);

router.use((req, res) => res.redirect('/'));

module.exports = router;
