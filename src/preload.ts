import { contextBridge } from 'electron';

const API = {
    getHello: () => {return "Hello World!"}
};

contextBridge.exposeInMainWorld("api", API);