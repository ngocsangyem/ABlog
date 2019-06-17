import express from 'express';
const router = express.Router();

/* GET list of all api. */
const getAllArticle = router.get('/posts', (req, res, next) => {
	let posts = [
		{
			_id: '1',
			title: 'Post 1',
			image:
				'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
			description:
				'Lorem Ipsum is simply dummy text of the printing and typesetting',
			date: '2019-10-06T18:25:43.511Z'
		},
		{
			_id: '2',
			title: 'Post 2',
			image:
				'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1082&q=80',
			description:
				'Lorem Ipsum is simply dummy text of the printing and typesettingweqfwqfewqfwq',
			date: '2019-11-06T18:25:43.511Z'
		},
		{
			_id: '3',
			title: 'Post 3',
			image:
				'https://images.unsplash.com/photo-1490633874781-1c63cc424610?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
			description: 'Lorem Ipsum',
			date: '2019-09-06T18:25:43.511Z'
		},
		{
			_id: '4',
			title: 'Post 4',
			image:
				'https://images.unsplash.com/photo-1450107579224-2d9b2bf1adc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
			description: 'Lorem',
			date: '2019-11-06T18:25:43.511Z'
		}
	];
	res.json(posts);
});

export default getAllArticle;
