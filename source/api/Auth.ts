import axios, { AxiosError } from 'axios';
import tokens from './tokens';
import { Cookies } from '../utils/Cookies';

const api = `${process.env.server}/auth`

export class Auth {
	static async login(username: string, password: string) {
		try {
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
				console.error('Login or password is incorrect!');
			} else {
				console.error('Something went wrong!');
			}

			process.exit(2);
		}
	}

	static async logout() {
		return new Promise((resolve) => {
			setTimeout(resolve, 1500);
		});
	}
}