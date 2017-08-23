import React, { Component } from 'react';
import './App.css';

import MainContainer from './components/MainContainer'
import Sidebar from './components/Sidebar'
import NavBar from './components/NavBar'

class App extends Component {

	constructor() {
		super()

		this.state = {
			url: "http://localhost:8080/",
			products: [],
			currentProduct: []
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


  render() {
    return (
      <div>
        <NavBar />
        <Sidebar 
        	products = { this.state.products} 
         	getCurrentProduct =	{ this.getCurrentProduct.bind(this) } />
        <MainContainer 
        	currentProduct = { this.state.currentProduct } />
      </div>
    );
  }
}

export default App;
