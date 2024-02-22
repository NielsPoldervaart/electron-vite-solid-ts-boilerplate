import { Component, Show, JSX } from "solid-js";

import { VsClose } from "solid-icons/vs";
import {
	BiSolidErrorAlt,
	BiSolidError,
	BiSolidInfoCircle,
} from "solid-icons/bi";

import UpdateCard from "./UpdateCard/UpdateCard";
import "./NotificationCard.css";

interface Props {
	message: string;
	type?: "notification" | "update" | "error" | "warning";
}

/**
 * Returns the component based on the provided type.
 * @param type - The type of the card component.
 * @returns The card component or null if the type is not recognized.
 */
function getCardComponent(
	type?: Props["type"]
): ((props: Props) => JSX.Element) | null {
	switch (type) {
		case "update":
			return UpdateCard;
		default:
			return null;
	}
}

/**
 * Returns the appropriate icon based on the provided type.
 * @param type - The type of the notification card.
 * @returns The JSX.Element representing the icon.
 */
function getIcon(type?: Props["type"]): JSX.Element {
	switch (type) {
		case "error":
			return (
				<BiSolidErrorAlt
					class="errorCardIcon cardIcon"
					size={24}
					style={{ color: "var(--error-color)" }}
				/>
			);
		case "warning":
			return (
				<BiSolidError
					class="warningCardIcon cardIcon"
					size={24}
					style={{ color: "var(--warning-color)" }}
				/>
			);
		default:
			return (
				<BiSolidInfoCircle
					class="infoCardIcon cardIcon"
					size={24}
					style={{ color: "var(--default-color)" }}
				/>
			);
	}
}

/**
 * Returns the color based on the provided type.
 * @param type - The type of the notification card.
 * @returns The color corresponding to the type.
 */
function getColor(type?: Props["type"]): string {
	switch (type) {
		case "error":
			return "var(--error-color)";
		case "warning":
			return "var(--warning-color)";
		default:
			return "var(--default-color)";
	}
}

export const NotificationCard: Component<Props> = (props): JSX.Element => {
	const { type = "notification", ...otherProps } = props;

	const SpecificCard = getCardComponent(type);
	const icon = getIcon(type);
	const color = getColor(type);

	return (
		<div
			class={`notificationCard ${type}`}
			style={{ "border-left": `3px solid ${color}` }}>
			<div class="baseCardElements">
				<div class="cardIcon">{icon}</div>
				<p class="cardMessage">{props.message}</p>
				<div class="cardCloseBtnContainer">
					<div class="cardCloseBtn">
						<VsClose size={18} />
					</div>
				</div>
			</div>
			<Show when={SpecificCard}>
				{(SpecificCard as Component<typeof otherProps>)(otherProps)}
			</Show>
		</div>
	);
};
