import { Component, createSignal } from "solid-js";

interface Props {
	value: number;
}

const ProgressBar: Component<Props> = (props) => {
	const [progress, setProgress] = createSignal(props.value);

	return (
		<div class="progress-bar">
			<div class="progress" style={{ width: `${progress()}%` }}></div>
		</div>
	);
};

export default ProgressBar;
