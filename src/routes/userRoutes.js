const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authenticate = require("../middlewares/authMiddleware");

router.get('/', authenticate, userController.getAll);
router.post('/register', userController.register);
router.get('/:id', userController.getById);
router.put('/:id', userController.update);
router.delete('/:id', userController.remove);

module.exports = router;
