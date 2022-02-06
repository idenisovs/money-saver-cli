import log4js from 'log4js';

import { Auth } from '../api';

const log = log4js.getLogger('auth');

export async function auth() {
	const username = process.env.LOGIN!;
	const password = process.env.PASSWORD!;

	log.debug('Authenticating as <%s>...', username)

	await Auth.login(username, password);

	log.debug('Success!');
}