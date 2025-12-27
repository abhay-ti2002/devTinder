import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // allows 0.0.0.0
  },
  preview: {
    host: true, // allows external hosts
    allowedHosts: ["devtinder-2-tzca.onrender.com", "heartmatch.app"], // add your Render URL
  },
});
