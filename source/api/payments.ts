import log4js from 'log4js';
import { Payment } from '../shared';
import axios, { AxiosRequestConfig } from 'axios';
import tokens from './tokens';

const log = log4js.getLogger('payments');

const api = `${process.env.SERVER}/payments`;

export class Payments {
	static save(payment: Payment) {
		log.debug('Saving payment <%d>!', payment.sum);

		const config: AxiosRequestConfig = {
			headers: {
				Cookie: `connect.sid=${tokens.token}`
			}
		}

		return axios.post(api, payment, config);
	}
}