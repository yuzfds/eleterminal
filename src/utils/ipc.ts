// import { ipcRenderer } from "electron";
const { ipcRenderer } = require("electron");

export function sendTerminalData(data: any) {
  ipcRenderer.send("terminalData", data);
}

export function addTerminalBackDataListener(callback: any) {
  ipcRenderer.on("terminalBackData", (event: any, data: any) => {
    console.log("监听", data);
    callback(data);
  });
}
