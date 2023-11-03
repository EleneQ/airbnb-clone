import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/airbnb-clone/",
  plugins: [react()],
});
