//3rd party
var $ = require('jQuery');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var _ = require('underscore');
require('backbone-react-component');

//local
var shirtData = require('../shirtJSON.js').shirts;
var Shirts = require('../models/shirts.js');
var ShirtItemComponent = require('./shirtitem.jsx').ShirtItem;
var Cart = require('../models/cart.js');




//#######################################
//      Parent Shirt-Shop
//######################################

var ShirtShopComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  getInitialState: function() {
      return {
        cartCollection: this.props.cartCollection,
        total: this.props.cartCollection.total()

      };
  },
  handleAddToCart: function(item){
    this.addItemToCart(item);
    this.getTotal();
  },
  addItemToCart: function(item){
    this.getTotal();

    var qty = this.refs.qty.value;
    var size = this.refs.size.value;
    console.log(qty);

    var additem = item.clone();
    this.props.cartCollection.add(item);
    this.setState({ cartCollection: this.props.cartCollection});
    var quantity = $('#quantity').val();
    var cartToJSON = JSON.stringify(this.state.cartCollection.toJSON());
    localStorage.setItem("cartItems", cartToJSON);
  },
  getTotal: function(item){
    this.setState({total: this.props.cartCollection.total()});
  },

  render: function() {

    return (
      <div className='container shirt-shop-container'>
        <div className="row">
          <ShirtItemComponent addItemToCart={this.addItemToCart} handleAddToCart={this.handleAddToCart} shirtCollection = {this.props.shirtCollection} cartCollection = {this.props.cartCollection}/>
        </div>
      </div>
    );
  }


});

//#######################################
//            Parent Factory
//######################################
// var MyFactory = React.createFactory(ShirtShopComponent);

// var ShirtShopComponentFactory = MyFactory({
//   collection: {
//     ShirtCollection: new Shirts.ShirtCollection(shirtData),
//     CartCollection: new Cart.CartCollection()
//   }
// });


module.exports = {
  //'ShirtShopComponentFactory': ShirtShopComponentFactory
  'ShirtShopComponent': ShirtShopComponent
};
