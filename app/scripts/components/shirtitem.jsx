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
                    <input type="text" className="form-control" id="quantity"  placeholder="QTY" />
                </form>
            	<button onClick={this.props.handleAddToCart.bind(this, item)} type="button" className="pull-right btn btn-success">Add to Cart</button>

							<div className="btn-group">
							  <button type="button" className=" btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							    Size <span className="caret"></span>
							  </button>
							  <ul className="dropdown-menu">
							    <li><a href="#">Small</a></li>
							    <li><a href="#">Medium </a></li>
							    <li><a href="#">Large</a></li>

							  </ul>
							</div>

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
