'use strict';

// const express = require('express');
const burger = require('../models/burger');

class Router {
    constructor(expressApp) {
        this.app = expressApp;
    }

    start() {
        this.index();
        //this.add();
        //this.devour();
        //this.remove();
    }

    index() {
        app.get('/', (req, res) => {
            burger.list()
                .then(burgers => {
                    res.render('index', {
                        burgers: burgers
                    });
                })
                .catch(error => console.log(error));
        });
    }

    add() {
        app.post('/add', (req, res) => {
            const burgerName = req.body.burgerName;

            if (/^\W*$/.test(burgerName)) {
                console.log('No empty burger name allowed');
            }
            else {
                burger.add(burgerName)
                    .then(result => {
                        res.redirect('/');
                    })
                    .catch(error => console.log(error));
            }
        });
    }

    devour() {
        app.put('/devour/:id', (req, res) => {
            // Convert "true" string to 1 (boolean)
            if ('devoured' in req.body && req.body['devoured'] === 'true') {
                req.body['devoured'] = 1;
            }

            burger.devour(parseInt(req.params.id), req.body)
                .then(result => {
                    res.redirect('/');
                })
                .catch(error => {
                    console.log(error);
                    res.redirect('/');
                });
        });
    }

    remove() {
        app.delete('/remove/:id', (req, res) => {
            burger.delete(parseInt(req.params.id))
                .then(result => {
                    res.redirect('/');
                })
                .catch(error => {
                    console.log(error);
                    res.redirect('/');
                });
        });
    }
}

module.exports = Router;