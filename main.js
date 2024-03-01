const path = require('path');
const url = require('url');
const {app, BrowserWindow} = require('electron');
app.allowRendererProcessReuse = true;

function createWindow(){
    
    let win = new BrowserWindow({ 
        width : 1200, 
        height : 1060,
        minWidth : 1200,
        minHeight : 1060,
        maxHeight : 1060,
        webPreferences: {nodeIntegration: true}
    });

    win.loadURL(url.format({
        pathname : path.join(__dirname, 'index.html'),
        protocol : 'file',
        slashes : true
    }));

    win.on('closed', () => {
        win = null;
    });
}

app.on('ready', createWindow);