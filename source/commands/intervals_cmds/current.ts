import log4js from 'log4js';
import { Intervals } from '../../api';
import outputInterval from './output-interval';

const log = log4js.getLogger('intervals');

export const command = 'current';
export const desc = 'Get current active interval';
export const builder = () => {}

export async function handler() {
	log.debug('Retrieving current active interval!');

	const interval = await Intervals.getCurrent();

	outputInterval(interval);
}