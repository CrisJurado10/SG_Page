import { defineConfig } from 'vitest/config' 
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Integrate React plugin for Fast Refresh and JSX compilation
  plugins: [react()],
  
  // Vitest Configuration
  // We use Vitest over Jest for native ESM support, zero-config Vite integration,
  // and significantly faster execution times by sharing the same transform pipeline.
  test: {
    // Simulates a browser environment (DOM, Window APIs) within Node.js,
    // essential for mounting and interacting with React components during tests.
    environment: 'jsdom',
    
    // Injects global test APIs (describe, it, expect) so we don't have to 
    // manually import them in every single test file, improving developer velocity.
    globals: true,
    
    // Bootstraps our testing environment before any suites run.
    // Used for setting up custom jest-dom matchers (e.g., toBeInTheDocument) 
    // and global mocks (like IntersectionObserver or ResizeObserver).
    setupFiles: './src/test/setup.ts',
  }
})
