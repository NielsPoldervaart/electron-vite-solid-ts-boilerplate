import { contextBridge, ipcRenderer } from 'electron';

let isMaximized = false;

window.addEventListener("DOMContentLoaded", () => {
    const minimizeBtn = document.getElementById("minimizeBtn");
    minimizeBtn?.addEventListener('click', () => {
        ipcRenderer.send('minimize-window');
    });

    const maximizeBtn = document.getElementById("maximizeBtn");
    maximizeBtn?.addEventListener('click', () => {
        ipcRenderer.send('maximize-window');
    });

    const closeBtn = document.getElementById("closeBtn");
    closeBtn?.addEventListener('click', () => {
        ipcRenderer.send('close-window');
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
        ipcRenderer.on('window-maximized', (_, isMaximized) => {
          callback(isMaximized);
        });
      },
});