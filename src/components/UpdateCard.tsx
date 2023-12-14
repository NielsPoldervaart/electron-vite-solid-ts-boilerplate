import { Setter } from "solid-js";

interface Props {
	updateVersion: string;
	setWantsUpdate: Setter<boolean>;
}

const UpdateCard = (props: Props) => {
	return (
		<div class="updateCard">
			<div class="updateCardText">
				<p>A new version is available: v{props.updateVersion}!</p>
				<p>Would you like to update now?</p>
			</div>
			<div class="updateCardBtns">
				<button
					onClick={() => {
						window.api.startDownloadUpdate();
					}}>
					Update now
				</button>

				<button
					onClick={() => {
						props.setWantsUpdate(false);
					}}>
					Remind me later
				</button>
			</div>
		</div>
	);
};

export default UpdateCard;
