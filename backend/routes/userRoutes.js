const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/:id', userController.getUserByEmail);
router.get('/email_suggestion/:q', userController.getEmailSuggestions);

module.exports = router;