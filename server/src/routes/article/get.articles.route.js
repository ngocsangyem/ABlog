import express from 'express';
const router = express.Router();
const mongoose = require('mongoose');
const Post = require('../../model/post');
/**
 * GET list of all api
 * - Token is verify then the code will executed
 */

export const getAllArticle = router.get('/posts', (req, res, next) => {
	Post.find((err, posts) => {
		if (err) {
			res.status(500).send('Error with posts');
		}
		res.json(posts);
	});
});

export default getAllArticle;
