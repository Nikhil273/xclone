const Post = require('../models/post.model.js');

const getpost = async (req, res) => {
  try {
    const posts = await Post.find({});
    res.render('showpost', { posts });
  } catch (error) {
    res.status(500).json({ success: false, message: "No Post Found " });
  }
};

const newPost = (req, res) => {
  res.render('makepost');
}

const createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const post = new Post({ title, content });
    await post.save();
    res.redirect('/posts');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getpost, createPost, newPost };