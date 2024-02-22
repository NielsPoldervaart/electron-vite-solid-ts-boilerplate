import { Accessor, Setter, Show } from "solid-js";
import { Portal } from "solid-js/web";
import { ProgressInfo } from "electron-updater";

import { VsChevronDown } from "solid-icons/vs";

// import UpdateCard from "./UpdateCardOld";
import { NotificationCard } from "../NotificationCards/NotificationCard";
import "./NotificationBox.css";

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
			<div class="notiBox">
				<div class="notiBoxHeader">
					<p class="headerText">Notifications</p>
					<div class="closeNotificationsContainer">
						<div class="closeNotifications">
							<VsChevronDown
								size={20}
								onClick={() =>
									console.log("Close notifications")
								}
							/>
						</div>
					</div>
				</div>
				<div class="notiBoxContent">
					<NotificationCard
						message={
							"New update available, v1.0.0. Would you like to download it?"
						}
						type="update"
					/>
					<NotificationCard message="This is a notification!" />
					<NotificationCard message="This is a error!" type="error" />
					<NotificationCard
						message="This is a warning!"
						type="warning"
					/>
				</div>
			</div>
		</Portal>
	);
};

export default NotificationBox;
