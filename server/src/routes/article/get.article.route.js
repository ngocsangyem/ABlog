import express from 'express';
const router = express.Router();
const mongoose = require('mongoose');
const Post = require('../../model/post');

/* GET article by id */
const getSingleArticle = router.get('/:id', (req, res, next) => {
	Post.findById({ _id: req.params.id }, (err, post) => {
		if (err) {
			res.status(500).send('Error with posts');
		}
		res.json(post);
	});
});

export default getSingleArticle;
