import express from 'express';
const router = express.Router();
const Post = require('../../model/post');

/**
 * Add new article
 */
function getPostDate() {
	let date = new Date();
	let day = date.getDate();
	let month = date.getMonth() + 1;
	let year = date.getFullYear();

	return `${day}/${month}/${year}`;
}

const addArticle = router.post('/', (req, res, next) => {
	let postData = req.body;
	let post = new Post({
		title: postData.title,
		image: postData.image,
		description: postData.description,
		createDate: new Date()
	});
	console.log(post);

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
