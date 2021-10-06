const express = require('express');
const router = express.Router();

const { putController } = require('../controllers/Follow/putController');
const { deleteController } = require('../controllers/Follow/deleteController');

// FOLLOW (And be followed)
router.put('/follow', putController);
// UNFOLLOW (And stop being followed)
router.delete('/follow', deleteController);