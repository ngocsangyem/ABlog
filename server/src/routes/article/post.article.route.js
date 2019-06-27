import express from 'express';
const router = express.Router();
const Post = require('../../model/post');

/**
 * Add new article
 */
const addArticle = router.post('/post', (req, res, next) => {
	let postData = req.body;
	let post = new Post({
		title: postData.title,
		image: postData.image,
		description: postData.description
	});

	if (!post.title || !post.image) {
		res.status(400);
		res.json({
			Error: 'Some things wrong with data'
		});
	} else {
		post.save((err, post) => {
			if (err) {
				console.log(
					`Error in Post save: ${JSON.stringify(err, undefined, 2)}`
				);
			}
			res.send(post);
		});
	}
});

export default addArticle;
