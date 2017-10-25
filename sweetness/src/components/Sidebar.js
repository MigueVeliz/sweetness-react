import React, { Component } from 'react'


class Sidebar extends Component {

	displayProducts() {
		let products = this.props.products

		return products.map((product, index) => {
			return (
				<div className = "single-product" key = { index } 
						onClick = { () => { this.props.getCurrentProduct(product) } }
				>
					<ul>
						<li> <img className = "image" src = { product.image } alt="hahaha" /> </li>
						<li> { product.name } </li>
						<li> ${ product.price } </li>
					</ul>
					{/*<button className="add-to-cart-button">Add to Cart</button>*/}
				</div>
			)
		})
	}


	render(){
		return (
			<div className = "sidebar">
				{ this.displayProducts() }
			</div>


		)
	}

}

export default Sidebar;