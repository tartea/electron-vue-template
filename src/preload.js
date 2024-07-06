const { contextBridge, ipcRenderer } = require("electron");

/**
 * 通过预加载向渲染器进程暴露一个全局的 window.electronAPI 变量
 * 出于 安全原因，不会直接暴露整个 ipcRenderer.send API。 确保尽可能限制渲染器对 Electron API 的访问。
 */
contextBridge.exposeInMainWorld("electronAPI", {});
