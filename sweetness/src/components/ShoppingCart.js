import React, { Component } from 'react';

class ShoppingCart extends Component {

	showCheckOutButton() {
		let items = this.props.shoppingCartItems;

		return items.length > 0 ? 
			<span 
				className="check-out"
				onClick={ () => { this.props.getMode("checkingOut") } }
			>Check out</span> : ""
	}

	render() {
		return (
			<div className="shopping-cart">
				<p>Cart</p>
				<p>Items: { this.props.shoppingCartItems.length } </p>
				{ this.showCheckOutButton() }
			</div>
		);
	}
}

export default ShoppingCart;