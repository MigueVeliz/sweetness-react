import React, { Component } from 'react'
import ShoppingCart from './ShoppingCart';


class NavBar extends Component {
	render(){
		return (
			<div className = "nav-bar">
{/*				<div className="login-button" onClick={ () => { this.props.getMode("login") } }>
					Log in
				</div>*/}

				<ShoppingCart 
				shoppingCartItems = { this.props.shoppingCartItems } 
				getMode={ this.props.getMode.bind(this) }
				/>
			</div>


		)
	}

}

export default NavBar;