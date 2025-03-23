const SignIn = () => {
	return (
		<div className="signin-container">
			<h1>Sign In</h1>
			<input type="text" placeholder="Username" className="input-field" />
			<input type="password" placeholder="Password" className="input-field" />
			<button className="signin-button">Sign In</button>
		</div>
	);
}

export default SignIn;