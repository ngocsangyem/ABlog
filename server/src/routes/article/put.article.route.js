import express from 'express';
const router = express.Router();
const mongoose = require('mongoose');
const Post = require('../../model/post');

/* update an existing post in database */
const updateArticle = router.put('/:id', (req, res, next) => {
	let postData = req.body;
	let post = new Post({
		title: postData.title,
		description: postData.description
	});
	Post.findByIdAndUpdate({ _id: req.params.id }, postData).then(() => {
		Post.findOne({
			_id: req.params.id
		}).then(post => {
			res.send(post);
		});
	});
});

export default updateArticle;
