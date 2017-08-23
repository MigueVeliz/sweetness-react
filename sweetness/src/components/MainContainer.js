import React, { Component } from 'react'


class MainContainer extends Component {

	showCurrentProduct() {

		let product = this.props.currentProduct

		return(
			<div className = "current-product-container">
				<img src = { product.image } />
				<p> { product.name }</p>
				<p> ${ product.price }</p>
				<p> { product.description }</p>
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