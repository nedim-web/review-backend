const express = require('express');
const router = express.Router();
const {getAllEss, createESS} = require('../controllers/ESSContoller');

router.get('/', getAllEss)
    .post('/', createESS)

module.exports = router;