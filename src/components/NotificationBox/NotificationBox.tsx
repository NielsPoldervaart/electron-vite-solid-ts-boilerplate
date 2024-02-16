import { Accessor, Setter, Show } from "solid-js";
import { Portal } from "solid-js/web";
import { ProgressInfo } from "electron-updater";

import { VsChevronDown } from "solid-icons/vs";

// import UpdateCard from "./UpdateCardOld";
import { NotificationCard } from "../NotificationCards/NotificationCard";

// interface Props {
// 	updateVersion: string;
// 	setWantsUpdate: Setter<boolean>;
// 	downloadProgress: ProgressInfo;
// 	setDisplayNotifications: Setter<boolean>;
// 	displayNotifications: boolean;
// 	updateAvailable: boolean;
// }

const NotificationBox = () => {
	return (
		<Portal>
			<div id="notiBox">
				<div id="notiBoxHeader">
					<p class="headerText">Notifications</p>
				</div>
				<div id="notiBoxContent">
					<NotificationCard
						title="New update available!"
						message={[
							"Version: 1.0.0",
							"Would you like to update?",
						]}
						type="update"
					/>
				</div>
			</div>
		</Portal>
	);
};

export default NotificationBox;
