import { Component, Show, createSignal } from "solid-js";

import {
	VsCode,
	VsChromeClose,
	VsChromeMaximize,
	VsChromeRestore,
	VsChromeMinimize,
} from "solid-icons/vs";

import "./Titlebar.css";

const Titlebar: Component = () => {
	const [isMaximized, setIsMaximized] = createSignal(false);

	const handleWindowMaximizedChange = (maximized: boolean) => {
		setIsMaximized(maximized);
	};

	// When window is maximized / unmaximized call callback function.
	window.api.onWindowMaximizedChange(handleWindowMaximizedChange);

	return (
		<header id="titlebar">
			<div id="titlebarDrag">
				<div id="titleLogo">
					<VsCode size={32} />
				</div>
			</div>
			<div id="titleBtns">
				<div class="titleBtn" id="minimizeBtn">
					<VsChromeMinimize size={18} />
				</div>
				<div class="titleBtn" id="maximizeBtn">
					<Show
						when={!isMaximized}
						fallback={<VsChromeRestore size={18} />}>
						<VsChromeMaximize size={18} />
					</Show>
				</div>
				<div class="titleBtn" id="closeBtn">
					<VsChromeClose size={18} />
				</div>
			</div>
		</header>
	);
};

export default Titlebar;
