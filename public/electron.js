const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
        nodeIntegration: true,
        webSecurity: false, // Allow local file loading
      },
  });

  if (app.isPackaged) {
    mainWindow.loadURL(`file://${path.join(__dirname, "../build/index.html")}`);
  } else {
    mainWindow.loadURL("http://localhost:3000");
  }
});