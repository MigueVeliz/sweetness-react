import React, { Component } from 'react'
import ShoppingCart from './ShoppingCart';


class NavBar extends Component {
	render(){
		return (
			<div className = "nav-bar">
{/*				<div className="login-button" onClick={ () => { this.props.getMode("login") } }>
					Log in
				</div>*/}

				<div className="logo">
					{/*<img src="https://image.ibb.co/dEaxpG/logo_pink.png" alt="logo_pink" border="0" />*/}
					<img src="https://image.ibb.co/eVyHpG/logo_white.png" alt="logo_white" />
				</div>

				<ShoppingCart 
				shoppingCartItems = { this.props.shoppingCartItems } 
				getMode={ this.props.getMode.bind(this) }
				/>

			</div>


		)
	}

}

export default NavBar;