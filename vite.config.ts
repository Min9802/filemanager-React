import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import path from 'path';
export default defineConfig(config => {
  return {
    plugins: [
      react(),
    ],
    css: {
      postcss: {
        plugins: [
          tailwindcss('./tailwind.config.ts'),
        ],
      },
    },
    resolve: {
      alias: {
        "@": path.resolve("src"),
      },
    },
  }
});
