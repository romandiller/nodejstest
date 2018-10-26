'use strict';
// home

const Query = require('../../query');

exports.get = (req, res, next) => {

	let user = req.session.user;
    
	if (!user) {

		res.redirect('/login');
    
    } else {

    	res.locals.title = 'WorkStation';
    	res.locals.user = user;

    	const query = new Query;

    	if (user.name === 'admin') {

            query.findAll({

                db: req.app.locals.db,
                collection: 'tasks'

            }, (result) => {

                res.locals.tasks = result;
                res.locals.template = './sections/home';
                res.render('page');

            });

    	} else {

            query.findItems({

                db: req.app.locals.db,
                collection: 'tasks',
                query: { owner: user.name }

            }, (result) => {

                res.locals.tasks = result;
                res.locals.template = './sections/home';
                res.render('page');

            });

    	}

    }

};