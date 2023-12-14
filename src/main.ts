import { app, BrowserWindow, ipcMain } from "electron";
import { join } from "path";
import { autoUpdater } from "electron-updater";

process.env.DIST = join(__dirname, "../dist");
process.env.PUBLIC = app.isPackaged
	? process.env.DIST
	: join(process.env.DIST, "../public");

const preload = join(__dirname, "./preload.js");
const url = process.env.VITE_DEV_SERVER_URL;

autoUpdater.autoDownload = false;
autoUpdater.autoInstallOnAppQuit = false;

const createWindow = () => {
	const window = new BrowserWindow({
		width: 1080,
		minWidth: 1080,
		height: 720,
		minHeight: 720,
		frame: false,
		// autoHideMenuBar: true,
		webPreferences: {
			devTools: true,
			preload,
		},
	});

	if (url) {
		window.loadURL(url);
	} else {
		window.loadFile(join(process.env.DIST, "index.html"));
	}

	ipcMain.on("minimize-window", () => {
		console.log("minimized");
		window.minimize();
	});

	ipcMain.on("maximize-window", () => {
		if (window.isMaximized()) {
			window.restore();
		} else {
			window.maximize();
		}
	});

	window.on("maximize", () => {
		window.webContents.send("window-maximized", true);
	});

	window.on("unmaximize", () => {
		window.webContents.send("window-maximized", false);
	});

	ipcMain.on("close-window", () => {
		window.close();
	});

	autoUpdater.on("update-available", () => {
		window.webContents.send("update-available", true);
		// autoUpdater.downloadUpdate();
	});

	autoUpdater.on("update-not-available", () => {
		window.webContents.send("update-available", false);
	});

	autoUpdater.on("error", (err) => {
		window.webContents.send(
			"update-error",
			`Error in auto-updater. ${err}`
		);
	});

	ipcMain.on("download-update", () => {
		console.log("download started");
		autoUpdater.downloadUpdate();
	});

	autoUpdater.on("download-progress", (progressObj) => {
		let log_message = "Download speed: " + progressObj.bytesPerSecond;
		log_message =
			log_message + " - Downloaded " + progressObj.percent + "%";
		log_message =
			log_message +
			" (" +
			progressObj.transferred +
			"/" +
			progressObj.total +
			")";
		console.log(log_message);
	});

	// autoUpdater.on("download-progress", (progress) => {
	// 	// const megaBytesPerSecond = progress.bytesPerSecond / 1048567;
	// 	window.webContents.send("update-download-progress", progress);
	// });

	autoUpdater.on("update-downloaded", () => {
		window.webContents.send("update-downloaded", true);
		console.log("quit and install");
		autoUpdater.quitAndInstall();
	});
};

app.whenReady().then(() => {
	createWindow();

	app.on("activate", () => {
		if (BrowserWindow.getAllWindows().length === 0) createWindow();
	});

	autoUpdater.checkForUpdates();
});

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") app.quit();
});
