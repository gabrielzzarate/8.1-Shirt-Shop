var Backbone = require('backbone');

var Shirt = Backbone.Model.extend({


});


var ShirtCollection = Backbone.Collection.extend({
	model: Shirt

});


module.exports = {
	"Shirt": Shirt,
	"ShirtCollection": ShirtCollection,
};
