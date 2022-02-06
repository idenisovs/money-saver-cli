import log4js from 'log4js';
import { Intervals } from '../../api';
import { formatDate } from '../../utils/format-date';
import { duration } from 'yet-another-duration';

const log = log4js.getLogger('intervals')

export const command = 'current';
export const desc = 'Get current active interval';
export const builder = () => {}

export async function handler() {
	log.debug('Retrieving current active interval!');

	const response = await Intervals.getCurrent();

	const start = new Date(response.start);
	const end = new Date(response.end);

	const days = duration(end.getTime() - start.getTime(), {
		units: {
			min: 'days'
		}
	}).toString();

	log.info('Current active interval:');
	log.info('From %s till %s (%s).', formatDate(start), formatDate(end), days);
	log.info('Starting sum - %d eur', response.sum);

	log.trace(response);
}