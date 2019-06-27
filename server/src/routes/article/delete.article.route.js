import express from 'express';
const router = express.Router();
const mongoose = require('mongoose');
const Post = require('../../model/post');

/* delete an existing post in database */
const deleteArticle = router.delete('/post/:id', (req, res, next) => {
	Post.findByIdAndRemove({ _id: req.params.id }).then((err, post) => {
		if (err) {
			console.log('Something wrong! Can not delete post');
		}
		res.send(post);
	});
});

export default deleteArticle;
