import log4js from 'log4js';
import { Intervals } from '../../api';

const log = log4js.getLogger('intervals')

export const command = 'current';
export const desc = 'Get current active interval';
export const builder = () => {}

export async function handler() {
	log.debug('Retrieving current active interval!');

	const response = await Intervals.getCurrent();

	console.log(response);
}