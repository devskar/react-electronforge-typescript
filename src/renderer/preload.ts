import { ipcRenderer } from 'electron';

// test ipc
ipcRenderer.send('test', 'ping');
