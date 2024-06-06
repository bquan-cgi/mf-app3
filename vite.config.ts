import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "app3",
      filename: "remoteEntry.js",
      exposes: {
        "./App3Home": "./src/App3Home"
      },
      remotes: {
        shellApp: "http://localhost:5001/assets/remoteEntry.js",
        //shellApp: "http://localhost:8080/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom", "@group-ui/group-ui-react"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
})
