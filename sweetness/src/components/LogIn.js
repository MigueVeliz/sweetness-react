constructor() {
		super()

		this.state = {
			email: "email",
			password: "password"
		}
	}


handleSubmit(e) {
		e.preventDefault();
		console.log("Registering a new user: " + this.state.email)

		const { email, password } = this.state;

		firebase.auth().createUserWithEmailAndPassword(email, password)
			.then( response => {
				console.log("New user has been registered!");
			})
			.catch( function(error) {
				console.log("Error: " + error);
			});
	}

	handleEmailChange(e) {
		//console.log("e.target.value: " + e.target.value)
		this.setState({ email: e.target.value })
		//console.log("state: " + this.state.email)

	}

	handlePasswordChange(e){
		this.setState({ password: e.target.value })

	}


	<div className="login">
				<form onSubmit={ this.handleSubmit.bind(this) }>
					<p>Email</p>
					<input 
						type="text" 
						name="email"
						onChange={ this.handleEmailChange.bind(this) }
						value={ this.state.email }
					/>

					<p>Password</p>
					<input 
						type="text" 
						name="password"
						onChange={ this.handlePasswordChange.bind(this) }
						value={this.state.password }
					/>

					<button>Register </button>
      			</form>
      		</div>