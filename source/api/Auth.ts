import axios, { AxiosError } from 'axios';
import log4js from 'log4js';
import tokens from './tokens';
import { Cookies } from '../utils';

const log = log4js.getLogger('auth');

const api = `${process.env.SERVER}/auth`

export class Auth {
	static async login(username: string, password: string) {
		try {
			log.info('Authenticating to %s as %s!', process.env.SERVER, username);

			const response = await axios.post(api, {
				username,
				password
			});

			if ('set-cookie' in response.headers) {
				const cookies = Cookies.process(response.headers['set-cookie']!);

				tokens.token = cookies.get('connect.sid');
			}

			return response.data;
		} catch (err) {
			const { response } = (err as AxiosError);

			if (response?.status === 401) {
				log.error('Login or password is incorrect!');
			} else {
				log.error('Something went wrong!');
			}

			log.trace(response);

			process.exit(2);
		}
	}

	static async logout() {
		return new Promise((resolve) => {
			setTimeout(resolve, 1500);
		});
	}
}