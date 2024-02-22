import Counter from "./components/Counter/Counter";
import Titlebar from "./components/Titlebar/Titlebar";
import Footer from "./components/Footer/Footer";
import "./App.css";

const App = () => {
	return (
		<>
			<Titlebar />
			<div class="mainContent">
				<h1>SolidJS + Vite + TypeScript</h1>
				<div class="card">
					<Counter />
				</div>
			</div>
			<Footer />
		</>
	);
};

export default App;
