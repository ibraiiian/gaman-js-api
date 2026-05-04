/**
 * ==========================================================================
 * Gaman Routes
 * ==========================================================================
 *
 * Define your application routes here. Each route maps an HTTP request
 * to a specific controller action. Keep your routes clean, simple,
 * and organized for better maintainability.
 *
 * Example:
 *    r.get('/', [AppController, 'HelloWorld']);
 *
 * For advanced usage, see the documentation:
 * 		https://gamanjs.github.io/docs/overview/routing/
 *
 * ==========================================================================
 */

import { composeRouter } from 'gaman/compose';
import AppController from './controllers/AppController';
import { AppService } from './services/AppService';

export default composeRouter((r) => {
	/**
	 * * Inject Service to Controllers
	 */
	r.mountService({
		appService: AppService(),
	});

	r.get('/', [AppController, 'render']);
});
