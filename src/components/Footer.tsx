import { Show, createSignal } from "solid-js";
import { Portal } from "solid-js/web";

import { HiOutlineBell, HiSolidBellAlert } from "solid-icons/hi";
import { VsChevronDown } from "solid-icons/vs";

interface Props {
	updateAvailable: boolean;
}

const Footer = (props: Props) => {
	const [displayNotifications, setDisplayNotifications] = createSignal(false);

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
						when={!props.updateAvailable}
						fallback={<HiSolidBellAlert size={20} />}>
						<HiOutlineBell size={20} />
					</Show>
				</div>
			</footer>
			<Show when={displayNotifications()}>
				<Portal>
					<div id="notiBox">
						<div id="notiBoxContent">
							<Show when={props.updateAvailable}>
								<button id="downloadAppUpdate">
									Download Update
								</button>
							</Show>
						</div>
						<div id="notiBoxIcons">
							<div
								class="closeIcon"
								onClick={() =>
									setDisplayNotifications(
										!displayNotifications()
									)
								}>
								<VsChevronDown size={20} />
							</div>
						</div>
					</div>
				</Portal>
			</Show>
		</>
	);
};

export default Footer;
