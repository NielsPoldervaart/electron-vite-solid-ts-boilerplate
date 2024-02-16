import { createSignal } from "solid-js";

import "./Counter.css";

const Counter = () => {
	const [count, setCount] = createSignal(0);

	return (
		<button class="counterBtn" onClick={() => setCount((c) => c + 1)}>
			Count value is {count()}
		</button>
	);
};

export default Counter;
