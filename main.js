// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
require('electron-reload')(__dirname)
// const mysql =  require('./db/mysql-connection.js')

var mysql = require('mysql')

var connection = mysql.createConnection({
    host     : '198.91.81.4',
    user     : 'fleonx12_neko',
    password : 'Neko.Fernando#92', // or the original password : 'apaswword'
    database : 'fleonx12_elctrontest'
})

connection.connect(function(err) {
    if(err){
        console.log("mysql-connection/err.code",err.code)
        console.log("mysql-connection/err.fatal",err.fatal)
    }
})

// module.exports = connection

let query = "SELECt * FROM usuarios";

connection.query(query, function(err, rows, fields){
	if (err) {
		console.log("Ocurrio un error", err)
		return;
	}

	console.log("traje esto:", rows)
})

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
	// Create the browser window.
	mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			nodeIntegration: true
		},
		frame: false
	})

	// and load the index.html of the app.
	mainWindow.loadFile('index.html')

	// Open the DevTools.
	mainWindow.webContents.openDevTools()

	// Emitted when the window is closed.
	mainWindow.on('closed', function () {
		// Dereference the window object, usually you would store windows
		// in an array if your app supports multi windows, this is the time
		// when you should delete the corresponding element.
		mainWindow = null
	})
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
	// On macOS it is common for applications and their menu bar
	// to stay active until the user quits explicitly with Cmd + Q
	if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
	// On macOS it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	if (mainWindow === null) createWindow()
})