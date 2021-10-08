const express = require('express');
const router = express.Router();

const {
    postComment
} = require('../controllers/Comment/postController');

const {
    getAllComments,
    getGeneralRating,
    getFormattedComments
} = require('../controllers/Comment/getController');

const {
    deleteComment,
} = require('../controllers/Comment/deleteController');



//GET
router.get('/all', getAllComments);
router.get('/generalRating', getGeneralRating);
router.get('/getFormattedComments', getFormattedComments);


//POST
router.post('/', postComment);

// DELETE
router.delete('/delete', deleteComment)


module.exports = router;