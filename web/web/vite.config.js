import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/produtos": {
        target: "https://proweb.leoproti.com.br/produtos", 
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
