'use strict'
 
import { app, protocol, BrowserWindow, Menu, Tray } from 'electron'
 
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import installExtension, { VUEJS_DEVTOOLS } from 'electron-devtools-installer'
const isDevelopment = process.env.NODE_ENV !== 'production'
 
// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])
 
async function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 432,
    height: 401,
    alwaysOnTop: false,//窗口一直保持在其他窗口前面
    modal: true,
    frame: false,
    darkTheme: true,
    resizable: true,//用户不可以调整窗口
    center: true, // 窗口居中
    transparent: false,//窗口透明
    show: false,// 显示窗口将没有视觉闪烁（配合下面的ready-to-show事件）
    hasShadow: true,//窗口是否有阴影
    webPreferences: {
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      // nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
      // contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION,
      devTools: true,//客户端可以打开开发者工具（在客户端打开快捷键：ctrl+shift+i）
      nodeIntegration: true,
      enableRemoteModule: true, // 使用remote模块(electron12版本就开始废除了,需要我们自己安装remote模块)
      contextIsolation: false,
      //解决axios请求跨域问题（不推荐，不安全，但简单好用）
      webSecurity: false,
    },
  })
 
  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    win.loadURL('app://./index.html')
  }
}
 
// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
 
 
app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.once('ready-to-show', () => {
  win.show();
})
app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      await installExtension(VUEJS_DEVTOOLS)
    } catch (e) {
      console.error('Vue Devtools failed to install:', e.toString())
    }
  }
  createWindow()
})
// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}