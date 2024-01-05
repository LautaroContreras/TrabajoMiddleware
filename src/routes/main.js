const express = require('express');
const router = express.Router();
const {usersIndex,usersServices,usersDesign} = require('../controllers/usersController')

router.get('/', usersIndex);
router.get('/services', usersServices);
router.get('/services/design', usersDesign);



module.exports = router;