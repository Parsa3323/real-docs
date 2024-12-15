import { defineConfig } from 'vitepress';

export default defineConfig({
  base: '/real-doc/', // Replace with your GitHub repository name
  build: {
    outDir: './docs/.vitepress/dist', // This is the default output directory
  }
});
