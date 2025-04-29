import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx   from '@mdx-js/rollup';

export default defineConfig({
  base: "/div2landing", // Ensure this matches your repository name
  plugins: [
    react(),
    mdx({ remarkPlugins: [] /* e.g. remark-gfm for tables */ })
  ]
});
