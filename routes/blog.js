const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');

router.get('/', async (req, res) => {
  try {
    const blog = await Blog.find();

    if (!blog)
      return res.status(400).json({ msg: 'Blog posts could not be found' });

    res.json(blog);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = router;
