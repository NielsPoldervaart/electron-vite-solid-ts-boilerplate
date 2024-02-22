import "./UpdateCard.css";

/**
 * UpdateCard component.
 *
 * @private
 * This component is not intended to be used directly.
 * Please use NotificationCard.tsx with the `type` property instead.
 *
 * @example
 * <NotificationCard type="update" message="This is an update message" />
 */

const UpdateCard = () => {
	return (
		<div class="updateCardElements">
			<button class="updateCardBtn" tabindex="-1">
				Yes
			</button>
			<button class="updateCardBtn" tabindex="-1">
				No
			</button>
		</div>
	);
};

export default UpdateCard;
