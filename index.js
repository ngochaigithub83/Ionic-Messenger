const { app, BrowserWindow } = require('electron')

function xuly() {
    let win = new BrowserWindow()
    console.log('dang chay');
    win.loadFile('./main.html')
}
app.on('ready', xuly)