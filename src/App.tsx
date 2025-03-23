import "./App.css";
import { useState } from "react";
import { Home, About, SignIn } from "./pages/index"
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router"

export default function App() {
	const [page, setPage] = useState("home");

	return (
		<div className="app-wrapper">
			<Header setPage={setPage} />
			<div className="content-container">
		
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
				</Routes>
				<Routes>
					<Route path="/signin" element={<SignIn />} />
				</Routes>
			</BrowserRouter>
			</div>
			
			{/* <div className="content-container">
				{page === "home" ? <Home /> : page === "about" ? <About /> : <SignIn />}
			</div> */}
		</div>
	);
}

/*
	npm i react-router
	imported <BrowserRouter />, Routes, and Route
	each project should havve 1 browser router
	The <Routes /> can be used to group <Routes /> Together
	Note that you can nest routes inside each other

	Now changing the path in the browser renders the appropirate content
	but the header no longer works, we need a mechanism to navigate (clicking the buttons should change the path)
*/

