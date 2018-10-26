'use strict';
// router
const express = require('express');
const router = express.Router();

const home = require('./home');
const login = require('./login');
const logout = require('./logout');
const action = require('./api');

router.get('/', home.get);
router.get('/login', login.get);
router.get('/logout', logout.get);
router.post('/api/:action', action.post);

module.exports = router;