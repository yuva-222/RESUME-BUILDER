const express = require('express');
const { getProfile, createOrUpdateProfile } = require('../controllers/profileController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// @route   GET api/profile
// @desc    Get current user's profile
// @access  Private
router.get('/', authMiddleware, getProfile);

// @route   POST api/profile
// @desc    Create or update user profile
// @access  Private
router.post('/', authMiddleware, createOrUpdateProfile);

module.exports = router;
