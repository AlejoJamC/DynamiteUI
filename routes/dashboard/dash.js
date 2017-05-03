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
var dashRouter = express.Router();
var logger      = require('../../utils/logger').logger;

/* GET Login page. */
dashRouter.get('/dash', function (req, res) {
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

    res.render('dashboard/dash', {
        title   : 'Moon HR',
        level   : '',
        layout  : 'dashboard/mainStruct',
        error   : error
    });
});

/* POST Login page. */
dashRouter.post('/dash', function (req, res) {

});

module.exports = dashRouter;