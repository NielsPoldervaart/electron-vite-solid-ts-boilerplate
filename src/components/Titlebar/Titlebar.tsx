import { Component, Show } from "solid-js";

import "./Titlebar.css";

import {
	VsCode,
	VsChromeClose,
	VsChromeMaximize,
	VsChromeRestore,
	VsChromeMinimize,
} from "solid-icons/vs";

interface Props {
	isMaximized: boolean;
}

const Titlebar: Component<Props> = (props) => {
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
						when={!props.isMaximized}
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
