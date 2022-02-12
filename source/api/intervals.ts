import axios, { AxiosRequestConfig } from 'axios';
import log4js from 'log4js';
import tokens from './tokens';
import { Interval } from '../shared';

const log = log4js.getLogger('intervals');

const api = `${process.env.SERVER}/intervals`;

export class Intervals {
	static async getAll(): Promise<Interval[]> {
		log.debug('Requesting current interval...');

		const props: AxiosRequestConfig = {
			headers: {
				Cookie: `connect.sid=${tokens.token}`
			}
		}

		const response = await axios.get<Interval[]>(`${api}`, props);

		return response.data.map((item) => new Interval(item));
	}

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

	static async getByDate(date: string): Promise<Interval|null> {
		log.debug('Requesting interval by date <%s>...', date);

		const props: AxiosRequestConfig = {
			headers: {
				Cookie: `connect.sid=${tokens.token}`
			},
			params: {
				date
			}
		};

		const response = await axios.get<Interval[]>(`${api}`, props);

		const [ existingInterval ] = response.data;

		if (existingInterval) {
			return new Interval(existingInterval);
		} else  {
			return null;
		}
	}
}