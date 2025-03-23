import { useNavigate } from "react-router";

const SignIn = () => {
	const navigate = useNavigate();
	const handleSignIn = () => {
		// do auth stuff here then nav
		const ok = window.confirm(`would you like to sign in for real?`);
		if (ok) {
			navigate("/")
		} else {
			alert("username/password not correct")
		}
	}
	return (
		<div className="signin-container">
			<h1>Sign In</h1>
			<input type="text" placeholder="Username" className="input-field" />
			<input type="password" placeholder="Password" className="input-field" />
			<button onClick={handleSignIn} className="signin-button">Sign In</button>
		</div>
	);
}

export default SignIn;