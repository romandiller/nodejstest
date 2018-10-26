'use strict';

exports.get = (req, res, next) => {

	let user = req.session.user;
    
   	if (!user) {

		res.locals.title = 'Авторизация';
		res.locals.template = './sections/login';
		res.render('page');
    
    } else {

    	res.redirect('/');

    }
    
};