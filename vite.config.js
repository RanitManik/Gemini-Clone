import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd()); // Correct way to load .env

  return {
    plugins: [react()],
    define: {
      'import.meta.env': JSON.stringify(env), // Pass all env variables
    },
  };
});
