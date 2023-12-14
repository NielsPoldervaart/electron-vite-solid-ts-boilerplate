import { contextBridge, ipcRenderer } from "electron";
import { ProgressInfo } from "electron-updater";

let isMaximized = false;

window.addEventListener("DOMContentLoaded", () => {
	const minimizeBtn = document.getElementById("minimizeBtn");
	minimizeBtn?.addEventListener("click", () => {
		ipcRenderer.send("minimize-window");
	});

	const maximizeBtn = document.getElementById("maximizeBtn");
	maximizeBtn?.addEventListener("click", () => {
		ipcRenderer.send("maximize-window");
	});

	const closeBtn = document.getElementById("closeBtn");
	closeBtn?.addEventListener("click", () => {
		ipcRenderer.send("close-window");
	});

	const downloadUpdate = document.getElementById("downloadAppUpdate");
	downloadUpdate?.addEventListener("click", () => {
		console.log("download update clicked");
		ipcRenderer.send("download-update");
	});
});

ipcRenderer.on("isMaximized", () => {
	isMaximized = true;
});

ipcRenderer.on("isRestored", () => {
	isMaximized = false;
});

contextBridge.exposeInMainWorld("api", {
	onWindowMaximizedChange: (callback: (isMaximized: boolean) => void) => {
		ipcRenderer.on("window-maximized", (_, isMaximized: boolean) => {
			callback(isMaximized);
		});
	},
	onUpdateAvailable: (callback: (available: boolean) => void) => {
		ipcRenderer.on(
			"update-available",
			(_, available: boolean, version: String) => {
				callback(available);
			}
		);
	},
	onUpdateError: (callback: (message: string) => void) => {
		ipcRenderer.on("update-error", (_, message: string) => {
			callback(message);
		});
	},
	startDownloadUpdate: () => {
		ipcRenderer.send("download-update");
	},

	// Calculates the MB/s download speed.
	// const megaBytesPerSecond = progress.bytesPerSecond / 1048567;
	onUpdateDownloadProgress: (callback: (progress: ProgressInfo) => void) => {
		ipcRenderer.on(
			"update-download-progress",
			(_, progress: ProgressInfo) => {
				callback(progress);
			}
		);
	},
	onUpdatedownloaded: (callback: (downloaded: boolean) => void) => {
		ipcRenderer.on("update-downloaded", (_, downloaded: boolean) => {
			callback(downloaded);
		});
	},
});
