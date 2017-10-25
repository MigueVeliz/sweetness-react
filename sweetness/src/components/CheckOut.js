import React, { Component } from 'react';

class CheckOut extends Component {

	constructor() {
		super()

		this.state = {
			updatedItems: [],
			parsedItems: []
		}
	}

	alreadyAdded(itemId) {
		let parsedItems = this.state.parsedItems;

		for (let i = 0; i < parsedItems.length; i++) {
			if(parsedItems[i].id === itemId) {
				return true;
			}
		}

		return false;

	}

	increateItemQuantity(itemId) {
		let parsedItems = this.state.parsedItems;

		for (let i = 0; i < parsedItems.length; i++) {
			if(parsedItems[i].id === itemId) {
				parsedItems[i].quantity += 1;
			}
		}

/*		this.setState({
			parsedItems: parsedItems
		});*/

	}

	// Remoe item from parsedItems array
	removeItem(id) {
		let currentItemsInCart = this.state.parsedItems;

		let newItemsInCart = currentItemsInCart.filter( item => {
			return item.id !== id ? item: "";
		});

		// console.log("New Items: " + newItemsInCart);

		this.setState({
			parsedItems: newItemsInCart
		})

		this.props.removeItem(id);
	}

	parseItemsQuantity() {
		let items = this.props.shoppingCartItems;

		let parsedItems = this.state.parsedItems;

		items.forEach(item => {
			item.quantity = 1;
		})
		// let control = 

		items.map(item => {
			if( parsedItems.length === 0 ) {
				parsedItems.push(item);
				// parsedItems.quantity = 0;

				console.log("parsedItems Array empty, pusching first obj")
			} else {
				if( this.alreadyAdded(item.id) ) {
				// parsedItems.quantity += 1;
				this.increateItemQuantity(item.id)
				console.log("obj already added, increasing its quantity")
			} else {
				parsedItems.push(item);
				console.log("obj not in array, pushing it..")
			}

			}

			

		}); //end of map

		// this.setState({
		// 	parsedItems: parsedItems
		// });

	}

	placeOrder() {
		console.log("Placing Order!!");
	}


	showItems() {
		// this.parseItemsQuantity();
		// let items = this.props.shoppingCartItems;
		let items = this.state.parsedItems;

		// let updatedItems = 

		return items.map( (item, index) => {
			return (
				<div className="items-to-be-bought" key={index}>
					<ul>
						<li>{ item.name }</li>
						<li>Price: ${ item.price }</li>
						<li>Quantity: {item.quantity} </li>
					</ul>
					<img className = "image-checking-out" src = { item.image } alt="hahaha" />
					<div className="remove-item">
						<button onClick={ () => { this.removeItem(item.id) } }>x</button>
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

				<button className="back-to-shopping" onClick={ () => { this.props.getMode("buying") }} >Back to shopping</button>

				<div className="current-items">
					{ this.parseItemsQuantity() }
					{ this.showItems() }

					
				</div>

				<button onClick={ () => { this.placeOrder() } } className="place-order-button">Place Order</button>
				

				<div className="payment-section">
					{ this.showForm() }
				</div>
			</div>
		);
	}
}

export default CheckOut;