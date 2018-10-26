'use strict';
// api

const Query = require('../../query');

exports.post = (req, res, next) => {

	if (!req.body.username) return;
    
    const query = new Query;

 //    let users = [
 //    	{name: 'admin', role: 0},
 //    	{name: 'user', role: 1}
	// ];


	// query.save({

	// 	db: req.app.locals.db,
	// 	collection: 'users',
	// 	data: users

	// }, (result) => {

	// 	res.redirect('/');

	// });

	// let tasks = [
	// 	{
	// 		task: 'Позвонить в агенство',
	// 		priority: '90',
	// 		progress: '0',
	// 		owner: 'user'
	// 	},
	// 	{
	// 		task: 'Продать слона',
	// 		priority: '50',
	// 		progress: '10',
	// 		owner: 'user2'
	// 	},
	// 	{
	// 		task: 'Купить слона',
	// 		priority: '30',
	// 		progress: '15',
	// 		owner: 'user'
	// 	},
	// 	{
	// 		task: 'Сходить а парикмахерскую',
	// 		priority: '50',
	// 		progress: '100',
	// 		owner: 'user2'
	// 	},
	// 	{
	// 		task: 'Купить огурцы',
	// 		priority: '10',
	// 		progress: '20',
	// 		owner: 'user'
	// 	},
	// 	{
	// 		task: 'Сходить в бар',
	// 		priority: '100',
	// 		progress: '90',
	// 		owner: 'user'
	// 	}
	// ];

	// query.save({

	// 	db: req.app.locals.db,
	// 	collection: 'tasks',
	// 	data: tasks

	// }, (result) => {

	// 	res.redirect('/');

	// });

	query.findItem({

		db: req.app.locals.db,
		collection: 'users',
		query: { name: req.body.username }

	}, (result) => {

		if (result) {

			req.session.user = {

				name: result.name,
				id: result._id

			}

			res.redirect('/');

		} else {

			res.redirect('/login');

		}

	});
    
};