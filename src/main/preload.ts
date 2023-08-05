const { contextBridge, ipcRenderer } = window.require('electron');

contextBridge.exposeInMainWorld('ipcRenderer', ipcRenderer);
