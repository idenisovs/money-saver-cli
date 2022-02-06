import axios, { AxiosRequestConfig } from 'axios';
import log4js from 'log4js';
import tokens from './tokens';

const log = log4js.getLogger('intervals');

const api = `${process.env.server}/intervals`;

export class Intervals {
	static async getCurrent() {
		log.debug('Requesting current interval...');

		const props: AxiosRequestConfig = {
			headers: {
				Cookie: `connect.sid=${tokens.token}`
			}
		}

		const response = await axios.get(`${api}/latest`, props);

		return response.data;
	}
}