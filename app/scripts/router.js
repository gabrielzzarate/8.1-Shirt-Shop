//3rd party
var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
require('backbone-react-component');

//local
var ShirtShopComponent = require('./components/shirtshop.jsx').ShirtShopComponent;
var CartComponent = require('./components/cartcomponent.jsx').CartComponent;
var shirt = require('./models/shirts.js');
var cart = require('./models/cart.js');
var shirtData = require('./shirtJSON.js').shirts;

var cartCollection = new cart.CartCollection();
var shirtCollection = new shirt.ShirtCollection();
shirtCollection.add(shirtData);


var Router = Backbone.Router.extend({
  routes: {
    '': 'shop',
    'cart' : 'cart'
  },

  shop: function(){
  	ReactDOM.render(React.createElement(
  		ShirtShopComponent, { shirtCollection: shirtCollection, cartCollection: cartCollection}),
  		$('#shirtshop')[0] );
  	},
  cart: function(){
  	ReactDOM.render(React.createElement(
  		CartComponent, { shirtCollection: shirtCollection, cartCollection: cartCollection}),
  		$('#shirtshop')[0] );
  }
});

module.exports = new Router();
