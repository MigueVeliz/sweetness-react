import React, { Component } from 'react';

class CheckOut extends Component {

	showItems() {
		let items = this.props.shoppingCartItems;

		return items.map(item => {
			return (
				<div className="items-to-be-bought" key={item.id}>
					<ul>
						<li>{ item.name }</li>
						<li>Price: ${ item.price }</li>
						<li>Quantity: 1 </li>
					</ul>
					<img className = "image-checking-out" src = { item.image } alt="hahaha" />
					<div className="remove-item">
						<button>x</button>
					</div>
				</div>
			)
		})
	}

	showForm() {
		return (
		  <form id="form" className="topBefore">
		
			<input id="name" type="text" placeholder="Name" />
		 	<input id="email" type="text" placeholder="E-mail" />
		 	<input id="cell-number" type="text" placeholder="Cell Number" />
		 	<input id="Address" type="text" placeholder="Address" />
		 	{/*<textarea id="message" type="text" placeholder="MESSAGE"></textarea>*/}
  			<input id="submit" type="submit" value="GO!" />
  
			</form>
		)
	}

	render() {
		return (
			<div className="checkout-section">

				<button onClick={ () => { this.props.getMode("buying") }} >Back to shopping</button>
				<h2>This will be the check out section</h2>

				<div className="current-items">
					{ this.showItems() }
				</div>

				<div className="payment-section">
					{ this.showForm() }
				</div>
			</div>
		);
	}
}

export default CheckOut;