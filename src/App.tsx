import "./App.css";
import { useState } from "react";
import { Home, About, SignIn } from "./pages/index"
import Header from "./Components/Header";

export default function App() {
	const [page, setPage] = useState("home");

	return (
		<div className="app-wrapper">
			<Header setPage={setPage} />
			<div className="content-container">
				{page === "home" ? <Home /> : page === "about" ? <About /> : <SignIn />}
			</div>
		</div>
	);
}