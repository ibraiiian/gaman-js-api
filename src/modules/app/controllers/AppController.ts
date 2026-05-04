/**
 * ==========================================================================
 * Gaman Controller
 * ==========================================================================
 *
 * This controller handles the core logic for your application.
 * Controllers in GamanJS keep your code clean, modular, and
 * easy to maintain — just like a well-structured MVC pattern.
 *
 * Example:
 *    HelloWorld(ctx) {
 *        return Res.json({ message: '❤️ Welcome to GamanJS' });
 *    }
 *
 * For more details, visit:
 * 		https://gamanjs.github.io/docs/overview/controllers/
 *
 * ==========================================================================
 */

import { composeController } from 'gaman/compose';
import { AppService } from '../services/AppService';

export type Deps = {
	appService: AppService;
};

export default composeController(({ appService }: Deps) => {
	/**
	 * TODO: your private logic in here
	 */

	return {
		render(ctx) {
			return Res.json({
				message: appService.WelcomeMessage(),
			});
		},
	};
});
