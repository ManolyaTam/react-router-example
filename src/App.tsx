import "./App.css";
import { Home, About, SignIn } from "./pages/index"
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router"

export default function App() {

	return (
		<div className="app-wrapper">
			<BrowserRouter>
				<Header />
				<div className="content-container">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/signin" element={<SignIn />} />
					</Routes>

				</div>
			</BrowserRouter>
		</div >
	)
}

/*
	   
 */
