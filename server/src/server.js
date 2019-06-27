const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 8080;
const api = require('./routes/users/user.routes');
const app = express();
const cors = require('cors');
// conection string
const db = 'mongodb://admin:admin1%403@ds343217.mlab.com:43217/ablog';

// Cors
app.use(cors());

// Conect to database
mongoose.connect(
	db,
	err => {
		err ? console.log(err) : console.log('Conected to mongodb');
	},
	{
		useMongoClient: true
	}
);
// mongoose.model('posts', { name: String });
mongoose.set('useFindAndModify', false);

// View engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Set static folder
app.use(express.static(path.join(__dirname, '../public')));

// Call route
import * as usersRouter from './routes/users/user.routes';
import * as articleRouter from './routes/article/article.routes';

// Handle json data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Call routes
app.get('/', (req, res) => {
	res.render('index');
});

app.use('/api/users', [
	usersRouter.registerUser,
	usersRouter.loginUser,
	usersRouter.getAllUser,
	usersRouter.getSingleUser,
	usersRouter.deleteUser
]);

app.use('/api/posts', [
	articleRouter.getAllArticle,
	articleRouter.getSingleArticle,
	articleRouter.addArticle,
	articleRouter.deleteArticle,
	articleRouter.updateArticle
]);

// Init app
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(port, () => {
	console.log('Server running on localhost:' + port);
});
