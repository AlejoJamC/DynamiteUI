/**
 * Copyright (c) 2017-present, Alejandro Mantilla <@AlejoJamC>.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree or translated in the assets folder.
 */

/**
 * Module dependencies
 */
var express     = require('express');
var loginRouter = express.Router();
var logger      = require('../../utils/logger').logger;

/* GET Login page. */
loginRouter.get('/login', function (req, res) {
    // Basic error validator
    var error = '';
    // Error
    if(typeof req.query.error !== 'undefined'){
        error = req.query.error;
    }
    // Session
    /*
     if(typeof req.session.userId === 'undefined' || typeof req.session.userId === ''){
     return res.redirect('/login');
     }
     */

    res.render('dashboard/login', {
        title   : 'Login | Moon HR',
        level   : '',
        layout  : 'dashboard/loginStruct',
        error   : error
    });
});

/* POST Login page. */
loginRouter.post('/login', function (req, res) {

});

/* GET Logout page. */
loginRouter.get('/logout', function (req, res) {
    req.session.destroy(function (err) {
        if(err){
            logger.info(err);
        }
        res.redirect('/login');
    });
});

module.exports = loginRouter;