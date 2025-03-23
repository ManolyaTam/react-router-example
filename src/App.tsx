import "./App.css";
import { Home, About, SignIn } from "./pages/index"
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router"

export default function App() {
	// const [page, setPage] = useState("home");

	return (
		<div className="app-wrapper">
			<BrowserRouter>
				<Header /*setPage={setPage}*/ />
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
	realized we need to have the header inside the router
	and   
 */
