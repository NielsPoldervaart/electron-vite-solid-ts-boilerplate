import { Show, createSignal } from "solid-js";
import { ProgressInfo } from "electron-updater";

import { HiOutlineBell, HiSolidBellAlert } from "solid-icons/hi";

import NotificationBox from "../NotificationBox/NotificationBox";
import "./Footer.css";

const Footer = () => {
	const [displayNotifications, setDisplayNotifications] = createSignal(false);

	// TODO: Implement the updateAvailable and wantsUpdate functions, use global state.

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
				<NotificationBox
					setDisplayNotifications={setDisplayNotifications}
				/>
			</Show>
		</>
	);
};

export default Footer;
