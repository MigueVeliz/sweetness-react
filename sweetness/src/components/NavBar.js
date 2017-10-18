import React, { Component } from 'react'
import ShoppingCart from './ShoppingCart';


class NavBar extends Component {
	render(){
		return (
			<div className = "nav-bar">
				<ShoppingCart 
				shoppingCartItems = { this.props.shoppingCartItems } 
				getMode={ this.props.getMode.bind(this) }
				/>
			</div>


		)
	}

}

export default NavBar;