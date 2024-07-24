const express = require('express');
const { getResume, createOrUpdateResume } = require('../controllers/resumeController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// @route   GET api/resume
// @desc    Get current user's resume
// @access  Private
router.get('/', authMiddleware, getResume);

// @route   POST api/resume
// @desc    Create or update user resume
// @access  Private
router.post('/', authMiddleware, createOrUpdateResume);

module.exports = router;
