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
var landingRouter = express.Router();
var logger      = require('../utils/logger').logger;

/* GET Index page. */
landingRouter.get('/', function (req, res) {
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
    // User Rol
    // If ............
    res.render('landing/index', {
        title   : 'Software de recursos humanos para la pequeña y mediana empresa | Moon HR',
        level   : '../',
        layout  : 'landing/struct',
        error   : error
    });
});

/* GET contact page. */
landingRouter.get('/contact', function (req, res) {
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
    // User Rol
    // If ............
    res.render('landing/contact', {
        title   : 'Software de recursos humanos para la pequeña y mediana empresa | Moon HR',
        level   : '../',
        layout  : 'landing/struct',
        error   : error
    });
});

/* GET Help page. */
landingRouter.get('/help', function (req, res) {
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
    // User Rol
    // If ............
    res.render('landing/help', {
        title   : 'Software de recursos humanos para la pequeña y mediana empresa | Moon HR',
        level   : '../',
        layout  : 'landing/struct',
        error   : error
    });
});

/* GET Pricing page. */
landingRouter.get('/pricing', function (req, res) {
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
    // User Rol
    // If ............
    res.render('landing/pricing', {
        title   : 'Software de recursos humanos para la pequeña y mediana empresa | Moon HR',
        level   : '../',
        layout  : 'landing/struct',
        error   : error
    });
});

/* GET Privacy page. */
landingRouter.get('/privacy', function (req, res) {
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
    // User Rol
    // If ............
    res.render('landing/privacy', {
        title   : 'Software de recursos humanos para la pequeña y mediana empresa | Moon HR',
        level   : '../',
        layout  : 'landing/struct',
        error   : error
    });
});

/* GET Sitemap page. */
landingRouter.get('/sitemap', function (req, res) {
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
    // User Rol
    // If ............
    res.render('landing/sitemap', {
        title   : 'Software de recursos humanos para la pequeña y mediana empresa | Moon HR',
        level   : '../',
        layout  : 'landing/struct',
        error   : error
    });
});

/* GET Terms page. */
landingRouter.get('/terms', function (req, res) {
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
    // User Rol
    // If ............
    res.render('landing/terms', {
        title   : 'Software de recursos humanos para la pequeña y mediana empresa | Moon HR',
        level   : '../',
        layout  : 'landing/struct',
        error   : error
    });
});

module.exports = landingRouter;