const isElectron = require("is-electron");
if (isElectron()) {
    const { ipcRenderer } = window.require("electron");
  module.exports = { ipcRenderer };
}