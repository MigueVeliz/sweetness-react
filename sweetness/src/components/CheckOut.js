import React, { Component } from 'react';

class CheckOut extends Component {
	render() {
		return (
			<div className="checkout-section">
				<button onClick={ () => {
					this.props.getMode("buying");
				}} >Home</button>
				<h2>This will be the check out section</h2>
			</div>
		);
	}
}

export default CheckOut;