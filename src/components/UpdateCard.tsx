import { ProgressInfo } from "electron-updater";
import { Setter, createSignal } from "solid-js";

interface Props {
	updateVersion: string;
	setWantsUpdate: Setter<boolean>;
	downloadProgress: ProgressInfo;
	setDisplayNotifications: Setter<boolean>;
}

const UpdateCard = (props: Props) => {
	const [showButtons, setShowButtons] = createSignal(true);
	const [showProgressBar, setShowProgressBar] = createSignal(false);
	const [showRestartButtons, setShowRestartButtons] = createSignal(false);

	return (
		<div class="updateCard">
			<div class="updateCardText">
				<p>New update available!</p>
				<p>Version: v{props.updateVersion}</p>
				<p>Would you like to download it?</p>
			</div>
			<div class="updateCardBtns">
				<button
					class="updateBtn"
					onClick={() => {
						window.api.startDownloadUpdate();
					}}>
					Download
				</button>
				<button
					class="updateBtn"
					onClick={() => {
						props.setWantsUpdate(false);
						props.setDisplayNotifications(false);
					}}>
					Not now
				</button>
			</div>
		</div>
	);
};

export default UpdateCard;
