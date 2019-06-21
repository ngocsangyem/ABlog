import express from 'express';
const router = express.Router();
const Post = require('../../model/post');

function verifyToken(req, res, next) {
	// If headers don't have authorization
	if (!rea.headers.authorization) {
		return res.status(401).send('Unauthorization request!!!');
	}
	// split token to array then get the token
	// Bearer xxx.yyy.zzzz => xxx.yyy.zzz
	let token = req.headers.authorization.split(' ')[1];
	if (token === 'null') {
		return res.status(401).send('Unauthorization request!!!');
	}
	// return the decoded token only if it is valid
	let payload = jwt.verify(token, 'secretKey');
	if (!payload) {
		return res.status(401).send('Unauthorization request!!!');
	}
	req.userId = payload.subject;
	next();
}

/**
 * Add new article
 * - Token is verify then the code will executed
 */
const addArticle = router.post('/add-post', verifyToken, (req, res, next) => {
	let postData = req.body;
	let post = new Post(postData);

	if (!post.title || post.image) {
		res.status(400);
		res.json({
			Error: 'Some things wrong with data'
		});
	} else {
		post.save((err, post) => {
			if (err) {
				console.log(err);
			}
			res.json(post);
		});
	}
});

export default addArticle;
