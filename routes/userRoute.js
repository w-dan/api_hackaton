const express = require('express');
const userController = require('../controllers/users.controller');
const auth = require('../middleware/tkauth');

const router = express.Router();

// GET
router.get('/', userController.getUsers);
router.get('/:userId', userController.getUserByID);

// POST
router.post('/', userController.createUser);
router.post('/:mail', userController.login);

// PUT
router.put('/private/:userId', auth, userController.replaceUser);

// PATCH
router.patch('/private/:userId', auth, userController.editUser);

// DELETE
router.delete('/private/:userId', auth, userController.deleteUser);

module.exports = router;