const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = 3000;
const api = require('./routes/users/user.routes');
const app = express();
const cors = require('cors');
// conection string
const db = 'mongodb://admin:admin%40123@ds231517.mlab.com:31517/blogdb';

// Cors
app.use(cors());

// Conect to database
mongoose.connect(db, err => {
	err ? console.log(err) : console.log('Conected to mongodb');
});
mongoose.model('posts', { name: String });

// View engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Set static folder
app.use(express.static(path.join(__dirname, 'client')));

// Call route
import * as usersRouter from './routes/users/user.routes';
import * as articleRouter from './routes/article/article.routes';

// Handle json data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Init app
app.get('/', (req, res) => {
	res.render('index');
});

app.use('/users', [
	usersRouter.registerUser,
	usersRouter.loginUser,
	usersRouter.getAllUser,
	usersRouter.getSingleUser,
	usersRouter.deleteUser
]);

app.use('/article', [
	articleRouter.getAllArticle,
	articleRouter.getSingleArticle,
	articleRouter.addArticle,
	articleRouter.deleteArticle,
	articleRouter.updateArticle
]);

// app.use("/api", api);
app.listen(port, () => {
	console.log('Server running on localhost:' + port);
});
