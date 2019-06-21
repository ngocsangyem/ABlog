import express from 'express';
const router = express.Router();
const mongoose = require('mongoose');
const Post = require('../../model/post');

/* update an existing post in database */
const updateArticle = router.put('/:id', (req, res, next) => {
	Post.findByIdAndUpdate({ _id: req.params.id }, req.body).then(() => {
		Post.findOne({ _id: req.params.id }).then(post => {
			res.send(post);
		});
	});
});

export default updateArticle;
