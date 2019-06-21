const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
	title: String,
	image: String,
	description: String,
	createDate: String
});

module.exports = mongoose.model('post', postSchema, 'posts');
