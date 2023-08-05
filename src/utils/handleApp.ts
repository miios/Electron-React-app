export const handleQuit = () => {
  ipcRenderer.send('quit-app');
};

export const handleMinimize = () => {
  ipcRenderer.send('minimize-app');
};
