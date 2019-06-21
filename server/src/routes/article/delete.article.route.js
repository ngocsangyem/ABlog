import express from 'express';
const router = express.Router();
const mongoose = require('mongoose');
const Post = require('../../model/post');

/* delete an existing post in database */
const deleteArticle = router.delete('/:id', (req, res, next) => {
	Post.findByIdAndRemove({ _id: req.params.id }).then(post => {
		res.send(post);
	});
});

export default deleteArticle;
