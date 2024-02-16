import { Component, Show, JSX } from "solid-js";
import UpdateCard from "./UpdateCard/UpdateCard";

interface Props {
	title?: string;
	message: Array<string> | string;
	type?: "update" | "error" | "notification";
	children?: any;
}

/**
 * Returns the component based on the provided type.
 * @param type - The type of the card component.
 * @returns The card component or null if the type is not recognized.
 */
function getCardComponent(
	type?: "update" | "error" | "notification"
): ((props: Props) => JSX.Element) | null {
	switch (type) {
		case "update":
			return UpdateCard;
		case "notification":
		default:
			return null;
	}
}

export const NotificationCard: Component<Props> = (props): JSX.Element => {
	const { type, ...otherProps } = props;
	const SpecificCard = getCardComponent(type);

	return (
		<div class="notificationCard">
			<Show when={props.title}>
				<h3>{props.title}</h3>
			</Show>
			{typeof props.message === "string" ? (
				<p>{props.message}</p>
			) : (
				props.message.map((msg) => <p>{msg}</p>)
			)}
			<Show when={SpecificCard}>
				{(SpecificCard as Component<typeof otherProps>)(otherProps)}
			</Show>
			{!SpecificCard && props.children}
		</div>
	);
};
