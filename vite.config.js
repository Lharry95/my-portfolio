import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // MUST match GitHub repository name exactly.
  // If repo is named 'my-portfolio', this is '/my-portfolio/'
  // If ever rename the repo, update this to match.
  base: "/my-portfolio/",
});
