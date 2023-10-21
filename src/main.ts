import { app, BrowserWindow, ipcMain } from "electron";
import { join } from "path";
import { autoUpdater, AppUpdater } from "electron-updater";

process.env.DIST = join(__dirname, "../dist")
process.env.PUBLIC = app.isPackaged ? process.env.DIST : join(process.env.DIST, "../public")

const preload = join(__dirname, "./preload.js")
const url = process.env.VITE_DEV_SERVER_URL

autoUpdater.autoDownload = false;
autoUpdater.autoInstallOnAppQuit = true;

let window: BrowserWindow;
const createWindow = () => {
	window = new BrowserWindow({
		width: 1080,
		minWidth: 1080,
		height: 720,
		minHeight: 720,
		frame: false,
		// autoHideMenuBar: true,
		webPreferences: {
			devTools: true,
			preload
		},
	});

	if (url) {
		window.loadURL(url)
	} else {
		window.loadFile(join(process.env.DIST, "index.html"))
	}

	ipcMain.on("minimize-window", () => {
		window.minimize();
	});

	ipcMain.on("maximize-window", () => {
		if (window.isMaximized()) {
			window.restore();
		}
		else {
			window.maximize();
		}
	});

	window.on("maximize", () => {
		window.webContents.send("window-maximized", true);
	})

	window.on("unmaximize", () => {
		window.webContents.send("window-maximized", false);
	});

	ipcMain.on("close-window", () => {
		window.close();
	});
}

autoUpdater.on("checking-for-update", () => {
	window.webContents.send("updateMessage", "Checking for update...");
});

autoUpdater.on("update-available", (info) => {
	window.webContents.send("updateMessage", "Update available.");
	// autoUpdater.downloadUpdate();
});

// autoUpdater.on("update-not-available", (info) => {
// 	window.webContents.send("updateMessage", "Update not available.");
// });

// autoUpdater.on("error", (err) => {
// 	window.webContents.send("updateMessage", "Error in auto-updater. " + err);
// });

// autoUpdater.on("download-progress", (progress) => {
// 	const megaBytesPerSecond = progress.bytesPerSecond / 1048567;
// 	window.webContents.send("updateMessage", `Downloading update: ${progress.transferred}/${progress.total} (${progress.percent}%) - [${megaBytesPerSecond.toFixed(2)} MB/s]`);
// });

// autoUpdater.on("update-downloaded", (info) => {
// 	window.webContents.send("updateMessage", "Update downloaded");
// });

app.whenReady().then(() => {
	createWindow();

	app.on("activate", () => {
		if (BrowserWindow.getAllWindows().length === 0) createWindow();
	});

	autoUpdater.checkForUpdatesAndNotify();
});

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") app.quit();
});