/**
 * ==========================================================================
 * Gaman Bootstrap File
 * ==========================================================================
 *
 * Welcome to your GamanJS application! ❤️
 *
 * This file is responsible for bootstrapping your application and
 * starting the HTTP server. By default, it runs on port 3431.
 *
 * Server URL:
 *    http://localhost:3431
 *
 * For the full documentation and more awesome features, visit:
 *    https://gamanjs.github.io/docs/
 *
 * ==========================================================================
 */

// src/index.ts
import { defineBootstrap } from 'gaman';
import UserRouter from './modules/users/Routes';

defineBootstrap(async (app) => {
  // 1. Mount Feature Routes
  app.mount(UserRouter);

  // 2. Start the Engine
  app.mountServer({ http: 3431 });
  console.log("🚀 Server GamanJS berjalan di http://localhost:3431");
});