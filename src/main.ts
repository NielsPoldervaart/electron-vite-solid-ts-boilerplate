process.env.DIST = join(__dirname, '../dist')
process.env.PUBLIC = app.isPackaged ? process.env.DIST : join(process.env.DIST, '../public')

import { app, BrowserWindow } from 'electron';
import { join } from 'path';

const preload = join(__dirname, './preload.js')
const url = process.env.VITE_DEV_SERVER_URL

const createWindow = () => {
	const window = new BrowserWindow({
		width: 1080,
		minWidth: 1080,
		height: 720,
		minHeight: 720,
		// frame: false,
		autoHideMenuBar: true,
		webPreferences: {
			devTools: true,
			preload
		},
	});

  if (url) {
    window.loadURL(url)
    window.webContents.openDevTools()
  } else {
    window.loadFile(join(process.env.DIST, 'index.html'))
  }
}

app.whenReady().then(() => {
	createWindow();

	app.on("activate", () => {
		if (BrowserWindow.getAllWindows().length === 0) createWindow();
	});
});

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") app.quit();
});