import { composeConsole } from '@gaman/kame/compose';

export default composeConsole((kame) => {
	kame
		.command('ping', (args, flags) => {
			Log.info('pong');
		})
		.usage('ping')
		.description('ping commands');

	// TODO: Implement other commands
});
