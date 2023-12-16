import { Accessor, Setter, Show } from "solid-js";
import { Portal } from "solid-js/web";
import { ProgressInfo } from "electron-updater";

import { VsChevronDown } from "solid-icons/vs";

import UpdateCard from "./UpdateCard";

interface Props {
	updateVersion: string;
	setWantsUpdate: Setter<boolean>;
	downloadProgress: ProgressInfo;
	setDisplayNotifications: Setter<boolean>;
	displayNotifications: boolean;
	updateAvailable: boolean;
}

const NotificationBox = (props: Props) => {
	return (
		<Portal>
			<div id="notiBox">
				<div id="notiBoxHeader">
					<p class="headerText">Notifications</p>
					<div
						class="closeIcon"
						onClick={() =>
							props.setDisplayNotifications(
								!props.displayNotifications
							)
						}>
						<VsChevronDown size={20} />
					</div>
				</div>
				<div id="notiBoxContent">
					<Show when={props.updateAvailable}>
						<UpdateCard
							updateVersion={props.updateVersion}
							setWantsUpdate={props.setWantsUpdate}
							downloadProgress={props.downloadProgress}
							setDisplayNotifications={
								props.setDisplayNotifications
							}
						/>
					</Show>
				</div>
			</div>
		</Portal>
	);
};

export default NotificationBox;
