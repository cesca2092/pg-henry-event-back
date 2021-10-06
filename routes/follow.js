const express = require('express');
const router = express.Router();

const { followUnfollow } = require('../controllers/Follow/putController');
const { deleteController } = require('../controllers/Follow/deleteController');

// FOLLOW (And be followed)
router.put('/', followUnfollow);
// UNFOLLOW (And stop being followed)
router.delete('/', deleteController);

module.exports = router;