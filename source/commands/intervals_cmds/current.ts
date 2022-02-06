import { duration } from 'yet-another-duration';
import log4js from 'log4js';
import { Intervals } from '../../api';
import { formatDate } from '../../utils';

const log = log4js.getLogger('intervals')

export const command = 'current';
export const desc = 'Get current active interval';
export const builder = () => {}

export async function handler() {
	log.debug('Retrieving current active interval!');

	const interval = await Intervals.getCurrent();

	const { start, end, sum } = interval;

	const days = duration(start.getTime() - end.getTime(), {
		units: {
			min: 'days'
		}
	}).toString();

	log.info('Current active interval (#%d):', interval.id);
	log.info('From %s till %s (%s).', formatDate(start), formatDate(end), days);
	log.info('Starting sum - %d eur', sum);

	log.trace(interval);
}