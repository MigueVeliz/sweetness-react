import React, { Component } from 'react';


class MainContainer extends Component {
	constructor() {
		super()

		this.state = {
		}
	}

	showCurrentProduct() {

		let product = this.props.currentProduct

		return(
			<div className = "current-product-container">
				<img src = { product.image } alt=""/>
				<p> { product.name }</p>
				<button onClick={ () => { this.props.addItemToCart(product) } }>Add to cart</button>
				<p> ${ product.price }</p>
				<p> { product.description }</p>
				<p> Product ID: { product.id }</p>
			</div>
		)
	}

	render(){
		return (
			<div className = "main-container">
				{ this.showCurrentProduct() }
			</div>
		)
	}

}

export default MainContainer;