import { defineConfig } from 'vite';
import electron from 'vite-plugin-electron';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
    plugins: [
        solidPlugin(),
        electron([
        {
            // Main-Process entry file of the Electron App.
            entry: 'src/main.ts',
            
        },
        {
            entry: 'src/preload.ts',
            onstart(options) {
                // Notify the Renderer-Process to reload the page when the Preload-Scripts build is complete, 
                // instead of restarting the entire Electron App.
                options.reload()
            },
        },
        ]),
    ],
    base:"./",
    build: {
        outDir: './dist',
        emptyOutDir: true,
    }
})
