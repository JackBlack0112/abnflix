import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig(() => {
    return {
        plugins: [vue(), tsconfigPaths(), tailwindcss()],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url)),
            },
        },
        server: {
            port: 5173,
        },
        test: {
            css: false,
            globals: true,
            environment: 'jsdom',
        },
    };
});
