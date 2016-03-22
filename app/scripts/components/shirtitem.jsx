//3rd party
var $ = require('jQuery');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var _ = require('underscore');
require('backbone-react-component');

//local


var ShirtItem = React.createClass({
	mixins: [Backbone.React.Component.mixin],

	addItemToCart: function(item){
    var qty = this.refs.qty.value;
    var size = this.refs.size.value;
    console.log(qty);

    var additem = item.clone();
    this.props.cartCollection.add(item);
    this.setState({ cartCollection: this.props.cartCollection});

    //var cartToJSON = JSON.stringify(this.state.cartCollection.toJSON());
    //localStorage.setItem("cartItems", cartToJSON);
  },


	render: function() {
		var shopItems = function(item) {

			return (
				<div key={item.get("cid")} className="col-sm-6 col-md-4">
					<div className="thumbnail">
						<img className="shop-item-image" src={item.get('image')} alt="..." />
					</div>
					<div className="caption">
							<h3>{item.get('title')}</h3>
            	<p className="item-price">${item.get('price')}</p>
            	<form>
                    <input ref="qty" type="text" className="form-control" id="quantity"  placeholder="QTY" />
                </form>
            	<button onClick={this.addItemToCart.bind(this, item)} type="button" className="pull-right btn btn-success">Add to Cart</button>




							  <select ref="size" className="form-control">
							 		<option>Size</option>
							    <option>Small</option>
							    <option>Medium </option>
							    <option>Large</option>

							  </select>


					</div>

				</div>
			);
		};


		return (
			<div className= "shirtitems">

				 {(this.props.shirtCollection).map(shopItems.bind(this))}
			</div>
			);
}

});

module.exports = {
	"ShirtItem": ShirtItem
};
