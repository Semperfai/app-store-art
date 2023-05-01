/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */

import { defineConfig } from 'vitest/config';
import Vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [Vue()],
  test: {
    globals: true,
    environment: 'jsdom'
  },
  root: '.'
});
