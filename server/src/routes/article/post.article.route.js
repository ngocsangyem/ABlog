import express from 'express';
const router = express.Router();
const Post = require('../../model/post');

function verifyToken(req, res, next) {
	// If headers don't have authorization
	if (!req.headers.authorization) {
		return res.status(401).send('Unauthorization request!!!');
	}
	// split token to array then get the token
	// Bearer xxx.yyy.zzzz => xxx.yyy.zzz
	let token = req.headers.authorization.split(' ')[1];
	if (token === 'null') {
		return res.status(401).send('Unauthorization request!!! Token is emty');
	}
	// return the decoded token only if it is valid
	let payload = jwt.verify(token, 'secretKey');
	if (!payload) {
		return res
			.status(401)
			.send('Unauthorization request!!! Token is invalid');
	}
	req.userId = payload.subject;
	next();
}

/**
 * Add new article
 * - Token is verify then the code will executed
 */
const addArticle = router.post('/', (req, res, next) => {
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
