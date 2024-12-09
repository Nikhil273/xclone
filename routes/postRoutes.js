const express = require('express');
const router = express.Router();
const { getpost, createPost, newPost } = require('../controllers/postController');

router.get('/posts', getpost);
router.get('/newPost', newPost);
router.post('/newPost', createPost);

module.exports = router;
