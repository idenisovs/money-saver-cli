import axios, { AxiosRequestConfig } from 'axios';
import log4js from 'log4js';
import tokens from './tokens';
import { Interval } from '../shared';

const log = log4js.getLogger('intervals');

const api = `${process.env.server}/intervals`;

export class Intervals {
	static async getCurrent(): Promise<Interval> {
		log.debug('Requesting current interval...');

		const props: AxiosRequestConfig = {
			headers: {
				Cookie: `connect.sid=${tokens.token}`
			}
		}

		const response = await axios.get<Interval>(`${api}/latest`, props);

		return new Interval(response.data);
	}
}