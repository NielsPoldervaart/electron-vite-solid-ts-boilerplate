import { createSignal } from "solid-js";

interface Props {
	title: string;
	description: string;
}

const InfoCard = (props: Props) => {
	return (
		<div class="info-card">
			<h2>{props.title}</h2>
			<p>{props.description}</p>
		</div>
	);
};

export default InfoCard;
