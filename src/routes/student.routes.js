const express = require('express');
const router = express.Router();

// import services
const controllers = require('../controllers/student.controllers');

// define the home page route
router.post('/', controllers.create);
router.get('/', controllers.findAll);
router.get('/:id', controllers.findById);
router.put('/:id', controllers.update);
router.delete('/:id', controllers.destroy);

module.exports = router;
