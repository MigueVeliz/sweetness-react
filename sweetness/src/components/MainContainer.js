import React, { Component } from 'react';


class MainContainer extends Component {
	constructor() {
		super()

		this.state = {
		}
	}

	showCurrentProduct() {

		//let product = this.props.currentProduct

		return(
			<div className = "current-product-container">
				{/*<img src = { product.image } alt=""/>*/}
				
{/*				<button onClick={ () => { this.props.addItemToCart(product) } }>Add to cart</button>

				<div className="current-product-info">
					<p> { product.name }</p>
					<p> ${ product.price }</p>
					<p> { product.description }</p>
					<p> <i>Product ID: { product.id } </i></p>
				</div>*/}

			</div>
		)
	}

	show3OnSaleItems() {
		return (
			<div className="onSaleItems">
				<div className="onSaleItem1"></div>
				<div className="onSaleItem2"></div>
				<div className="onSaleItem3"></div>
			</div>
		)
	}

	render(){
		return (
			<div className = "main-container">
				{ this.showCurrentProduct() }
				{ this.show3OnSaleItems() }
			</div>
		)
	}

}

export default MainContainer;