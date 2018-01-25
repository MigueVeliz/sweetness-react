import React, { Component } from 'react';

import Checkout from "../Checkout";

class CheckOut extends Component {

	constructor() {
		super()

		this.state = {
			updatedItems: [],
			parsedItems: []
		}
	}

	// Checks if the item clicked is already
	// in the parsedItems array, if it is then
	// it returns tru, if it's not then it
	// returns false
	alreadyAdded(itemId) {
		const parsedItems = this.state.parsedItems;

		console.log("parsedItems.length:" + parsedItems.length);

		for (let i = 0; i < parsedItems.length; i++) {
			console.log("checking if item is already added");
			if(parsedItems[i].id === itemId) {
				console.log("alreadyAdded returnning True");
				return true;
			}
		}

		console.log("alreadyAdded returnning False")
		return false;

	}

	// Checks if there is an obj with the same ID
	// as the itemId pass, if there is then it 
	// increases its quantity by 1
	increateItemQuantity(itemId) {
		let parsedItems = this.state.parsedItems;

		parsedItems.forEach( item => {
			if(item.id === itemId) {
				item.quantity++;
			}
			
			//item.id === itemId ? item.quantity++ : ""
		})

		this.setState({
			parsedItems: parsedItems
		});

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

		// removes the product from the shopping cart
		// array in the app.js state
		this.props.removeItem(id);
	}

	addItem(item){

		//const newItems = this.state.parsedItems.concat(item);
		//this.setState({ parsedItems: newItems })
		
		this.setState({ parsedItems: [...this.state.parsedItems, item] })
	}

	componentWillMount() {
		//this.parseItemsQuantity();
		console.log("componentWillMount running!");

		//console.log("this.state.parsedItems:" + this.state.parsedItems.length)
	}

	parseItemsQuantity() {
		// items from the original shoppin cart
		const items = this.props.shoppingCartItems;

		const parsedItems = this.state.parsedItems;

		items.forEach(item => {
			item.quantity = 0;
		})

		items.forEach( item => {
			
			if( parsedItems.length === 0 ) {
			
				item.quantity = 1;

				 //parsedItems.push(item);

				//[...this.state.shoppingCartItems, item]
				//this.setState({ parsedItems: [...this.state.parsedItems, item] });

				this.addItem(item);

				console.log("parsedItems Array empty, pusching first obj")
			} else {
				if( this.alreadyAdded(item.id) ) {
				// parsedItems.quantity += 1;
				//item.quantity += 1;
				this.increateItemQuantity(item.id);
				this.addItem(item);

				console.log("obj already added, increasing its quantity")
			} else if( !this.alreadyAdded(item.id) ) {
				//parsedItems.push(item);
				item.quantity = 1;

				this.addItem(item);

				console.log("obj not in array, pushing it..")
			}

			}

			
		}); //end of map

	}

	placeOrder() {
		console.log("Placing Order!!");
	}


	showItems() {
		//const items = this.state.parsedItems;
		const items = this.props.shoppingCartItems;
		//console.log("this.state.parsedItems size: ", items.length)

		// let updatedItems = 

		return items.map( (item, index) => {
			return (
				<div className="items-to-be-bought" key={index}>
					<div className = "left-info" >
						<img className = "image-checking-out" src = { item.image } alt="hahaha" />
						<h2> { item.name } </h2>
						<h1> ${ item.price }</h1>
					</div>


				</div>
			)
		})
	}

	showTotal() {
		const items = this.props.shoppingCartItems;

		let total = 0;

		items.forEach(item => {
			total += item.price;
		});

		console.log(`total is ${total}`);

		return (
			<h3>Your total is: ${total} </h3>
		);




	}// end of showTotal

	handleSubmit(event) {
		event.preventDefault();

		const target = event.target;

		const name = target.name.value;
		const cellNumber = target.cellNumber.value;
		const address = target.address.value;
		const textarea = target.textarea.value;

		console.log("Name is: " + name);
		console.log("cellNumber is: " + cellNumber);
		console.log("Address is: " + address);
		console.log("Message is: " + textarea);
	}

	showForm() {
		return (
		 	<form id="form" className="topBefore" onSubmit={ this.handleSubmit.bind(this) } >
		
				<input id="name" type="text" placeholder="Name" name="name" />
			 	{/*<input id="email" type="text" placeholder="E-mail" />*/}
			 	<input id="cell-number" type="number" placeholder="Cell Number" name="cellNumber" />
			 	<input id="Address" type="text" placeholder="Address" name="address" />
			 	<textarea id="message" type="text" placeholder="MESSAGE" name="textarea" ></textarea> 
	  			<input className="place-order-button" id="submit" type="submit" value="GO!" />
  
			</form>
		)
	}

	render() {
		return (
			<div className="checkout-section">

				<button className="back-to-shopping" onClick={ () => { this.props.getMode("buying") }} >Back to shopping</button>

				<div className="current-items">
					{/* this.parseItemsQuantity()*/ }
					{ this.showItems() }
				</div>

				<div className="message-area">
					{ this.showForm() }

				</div>

				<div className="payment-section">
					
					<h2>Payment Information</h2>
				</div>

				<div className="total">
					{ this.showTotal() }
				</div>

				<Checkout 
					name={'I am going to be a Billonaire'}
					description={'Muchos chavos'}
					amount={1}
				/>

				<button onClick={ () => { this.placeOrder() } } className="place-order-button">Place Order</button>

			</div>
		);
	}
}

export default CheckOut;