//3rd party
var $ = require('jQuery');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var _ = require('underscore');
require('backbone-react-component');

//local
var Cart = require('../models/cart.js');
var Shirts = require('../models/shirts.js');
var shirtData = require('../shirtJSON.js').shirts;


var CartComponent = React.createClass({
		mixins: [Backbone.React.Component.mixin],
		getInitialState: function() {
		    return {
		    	total: this.props.cartCollection.total(),
		    	cartItems: JSON.parse(localStorage.cartItems),
		    	cartCollection: this.props.cartCollection,

		    };
		},
		removeCartItem: function(item){
			this.props.cartCollection.remove(item);
			this.calculateTotal();
			this.setState({cartCollection: this.props.cartCollection});

		},
		calculateTotal: function(item){
			this.setState({total: this.props.cartCollection.total()});

		},
		render: function() {
			return (
				<div className='container '>
					<table className="table table-condensed cart-table-container">
						<thead>
							<tr>
								<th>#</th>
								<th>Shirt</th>
								<th>Size</th>
								<th>QTY</th>
								<th>Price</th>
								<th>Deal Expires</th>
								<th>Remove</th>
							</tr>
						</thead>
						<tbody>
							<CartItem cartCollection={this.props.cartCollection} removeCartItem={this.removeCartItem} total={this.state.total}/>
						</tbody>
					</table>
					<div className="cart-total-container">
							<span>Cart Total: ${this.state.total}</span>
					</div>
				</div>
			);
		}
});

var CartItem = React.createClass({
	mixins: [Backbone.React.Component.mixin],

	render: function() {

		var cartItems = function(item) {
		return (
			<tr key={item.get("cid")}>
					<th scope="row">1</th>
					<th>{item.get('title')}</th>
					<th>{item.get('size')}</th>
					<th>{item.get('quantity')}</th>
					<th>{item.get('price')}</th>
					<th>build deal timer </th>
					<th><button onClick={this.props.removeCartItem.bind(this, item)} type="button" className="btn btn primary">Remove</button></th>



				</tr>

		);
	};

	return (
		<div className="cartitems">
			{this.props.cartCollection.map(cartItems.bind(this))}

		</div>
		);
	}

});

// var MyFactory = React.createFactory(CartComponent);

// var CartComponentFactory = MyFactory({
//   collection: {
//     ShirtCollection: new Shirts.ShirtCollection(shirtData),
//     CartCollection: new Cart.CartCollection()
//   }
// });





module.exports = {
	//"CartComponentFactory": CartComponentFactory,
	"CartComponent": CartComponent,
	"CartItem": CartItem
};
