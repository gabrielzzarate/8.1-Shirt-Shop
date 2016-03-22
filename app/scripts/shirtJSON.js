var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');
var Backbone = require('backbone');
require('backbone-react-component');



var shirts = [

                    {
                        "title": "'Bad Cats' Matt Stevens Collaboration Shirt",
                        "price": 25,
                        "image": 'http://static1.squarespace.com/static/5654b51ae4b015fff660978d/565f8ed0e4b0a09598e26679/566750d857eb8dfb7cbfd5ac/1449611516441/photo1.jpg?format=1000w',
                        "quantity": 0,
                        "size": ""

                    }, {
                        "title": "Greenville Shirt",
                        "price": 15,
                        "image": 'http://static1.squarespace.com/static/5654b51ae4b015fff660978d/565f8ed0e4b0a09598e26679/566629894bf118f2873bfe37/1449535885955/_DSC9687.JPG?format=1500w',
                        "quantity": 0,
                        "size": ""

                    }, {
                        "title": "Dapper Ink 'Little Print Man' Shirt",
                        "price": 15,
                        "image": 'http://static1.squarespace.com/static/5654b51ae4b015fff660978d/565f8ed0e4b0a09598e26679/566067e4e4b020f4bf3ba773/1449159219011/IMG_0527-2.JPG?format=1000w',
                        "quantity": 0,
                        "size": ""
                    }
   ]

   module.exports = {
    'shirts': shirts
   };
