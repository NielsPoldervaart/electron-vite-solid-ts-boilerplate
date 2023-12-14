import { createSignal } from "solid-js";

import Counter from "./components/Counter";
import Titlebar from "./components/Titlebar";
import Footer from "./components/Footer";

export const App = () => {
	const [isMaximized, setIsMaximized] = createSignal(false);
	const [updateAvailable, setUpdateAvailable] = createSignal(false);
	const [updateVersion, setUpdateVersion] = createSignal(`v${APP_VERSION}`);

	const handleWindowMaximizedChange = (maximized: boolean) => {
		setIsMaximized(maximized);
	};

	const handleUpdateAvailable = (available: boolean, version: string) => {
		setUpdateAvailable(available);
		setUpdateVersion(version);
	};

	// When window is maximized / unmaximized call callback function.
	window.api.onWindowMaximizedChange(handleWindowMaximizedChange);

	// When window is maximized / unmaximized call callback function.
	window.api.onUpdateAvailable(handleUpdateAvailable);

	return (
		<>
			<Titlebar isMaximized={isMaximized()} />
			<div class="mainContent">
				<h1>SolidJS + Vite + TypeScript</h1>
				<div class="card">
					<Counter />
				</div>
			</div>
			<Footer
				updateAvailable={updateAvailable()}
				updateVersion={updateVersion()}
			/>
		</>
	);
};
