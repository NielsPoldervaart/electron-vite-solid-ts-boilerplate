import { createSignal } from "solid-js";

const Counter = () => {
	const [count, setCount] = createSignal(0);

	return (
		<button class="standardBtn" onClick={() => setCount((c) => c + 1)}>
			Count value is {count()}
		</button>
	);
};

export default Counter;
