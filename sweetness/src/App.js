import React, { Component } from 'react';
import './App.css';

import MainContainer from './components/MainContainer';
import Sidebar from './components/Sidebar';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import CheckOut from './components/CheckOut';

class App extends Component {

	constructor() {
		super()

		this.state = {
			mode: "buying",
			url: "http://localhost:8080/",
			products: [],
			currentProduct: [],
			shoppingCartItems: []
		}
	}

	/* Product Information is loaded as soon
	as the website loads */
	componentDidMount() {
		
		fetch(this.state.url)
		.then((response) => {
			return response.json()
		})
		.then((responseJson) => {
			console.log(responseJson)

			this.setState({
				products: responseJson,
				currentProduct: responseJson[0]
			});
		})
	}//end of componentDidMount

	getCurrentProduct( product ) {

		console.log("currentProduct is: ", product)

		this.setState({
			currentProduct: product
		})
	}

	// Adds a new item to shoppign cart
	addItemToCart( item ) {
		console.log("Item ID: " + item );

		this.setState({
			//shoppingCartItems: this.state.shoppingCartItems.concat([item])
			 shoppingCartItems: [...this.state.shoppingCartItems, item]
		});

		console.log("shoppingCartItems: " + this.state.shoppingCartItems)

	}

	getMode(mode) {
		this.setState({
			mode: mode
		})
	}

	storeMode() {
		let mode = this.state.mode;

		console.log("mode: " + mode)

		if(mode === "buying") {
			return (
				<div>
			        <NavBar 
			        	shoppingCartItems = { this.state.shoppingCartItems }
			        	getMode={ this.getMode.bind(this) }
			        />

			        <Sidebar 
			        	products = { this.state.products} 
			         	getCurrentProduct =	{ this.getCurrentProduct.bind(this) } 
			         />

			        <MainContainer
			        	addItemToCart = { this.addItemToCart.bind(this) } 
			        	currentProduct = { this.state.currentProduct } 
			        />
			     
			     	<Footer />

			     </div>
			)

		} else if(mode === "checkingOut") {
			return <CheckOut
				getMode={ this.getMode.bind(this) }
			 />

		}
	}


  render() {
    return (
      <div>
      	{ this.storeMode() }
      </div>


    );
  }
}

export default App;
