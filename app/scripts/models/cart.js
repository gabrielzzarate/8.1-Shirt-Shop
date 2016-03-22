
var Backbone = require('backbone');
//Backbone.LocalStorage = require("backbone.localstorage");

var Cart = Backbone.Model.extend({

});

var CartCollection = Backbone.Collection.extend({
	model: Cart,
	//localStorage: new Backbone.LocalStorage('Cart'),
	total: function() {
        var addItems = function(item1, item2) {
          return item1 + item2.get('price');
        }
      return this.reduce(addItems, 0);
    }
});


module.exports = {
	"Cart": Cart,
	"CartCollection": CartCollection
};
