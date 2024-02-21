import { Show, createSignal } from "solid-js";
import { ProgressInfo } from "electron-updater";

import { HiOutlineBell, HiSolidBellAlert } from "solid-icons/hi";

import NotificationBox from "../NotificationBox/NotificationBox";
import "./Footer.css";

const Footer = () => {
	const [displayNotifications, setDisplayNotifications] = createSignal(false);
	// const [wantsUpdate, setWantsUpdate] = createSignal(true);
	// const [updateAvailable, setUpdateAvailable] = createSignal(true);
	// const [updateVersion, setUpdateVersion] = createSignal(`${APP_VERSION}`);
	// const [downloadProgress, setDownloadProgress] = createSignal({
	// 	total: 0,
	// 	delta: 0,
	// 	transferred: 0,
	// 	percent: 0,
	// 	bytesPerSecond: 0,
	// });

	// const handleUpdateAvailable = (available: boolean, version: string) => {
	// 	setUpdateAvailable(available);
	// 	setUpdateVersion(version);
	// };

	// const handleDownloadUpdateProgress = (progress: ProgressInfo) => {
	// 	setDownloadProgress(progress);
	// };

	// window.api.onUpdateAvailable(handleUpdateAvailable);
	// window.api.onUpdateDownloadProgress(handleDownloadUpdateProgress);

	// TODO: Clean up props for notifications
	// TODO: Add "read" functionality to notifications
	// TODO: Make modular notification card.

	return (
		<>
			<footer id="footer">
				<div id="version">v{APP_VERSION}</div>
				<div
					id="notifications"
					onClick={() =>
						setDisplayNotifications(!displayNotifications())
					}>
					<Show
						// when={updateAvailable() && wantsUpdate()}
						when={true}
						fallback={<HiOutlineBell size={20} />}>
						<HiSolidBellAlert size={20} />
					</Show>
				</div>
			</footer>
			<Show when={displayNotifications()}>
				<NotificationBox />
			</Show>
		</>
	);
};

export default Footer;
