const express = require('express');
const router = express.Router();
const {getAllTf, createTF} = require('../controllers/TFController');

router.get('/', getAllTf)
    .post('/', createTF)

module.exports = router;