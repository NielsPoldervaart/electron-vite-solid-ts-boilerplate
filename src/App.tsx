import { createSignal } from "solid-js";

import Counter from "./components/Counter/Counter";
import Titlebar from "./components/Titlebar/Titlebar";
import Footer from "./components/Footer/Footer";

export const App = () => {
	const [isMaximized, setIsMaximized] = createSignal(false);

	const handleWindowMaximizedChange = (maximized: boolean) => {
		setIsMaximized(maximized);
	};

	// When window is maximized / unmaximized call callback function.
	window.api.onWindowMaximizedChange(handleWindowMaximizedChange);

	return (
		<>
			<Titlebar isMaximized={isMaximized()} />
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
