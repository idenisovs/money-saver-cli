import { duration } from 'yet-another-duration';
import log4js from 'log4js';
import { Intervals } from '../../api';
import { extractDate } from '../../utils';

const log = log4js.getLogger('intervals')

export const command = 'all';
export const desc = 'Get all intervals';
export const builder = () => {}

export async function handler() {
	log.debug('Retrieving all intervals!');

	const intervals = await Intervals.getAll();

	for (let interval of intervals) {
		const { start, end, sum } = interval;

		const from = extractDate(start);
		const till = extractDate(end);

		const days = duration(end.getTime() - start.getTime(), {
			units: {
				min: 'days'
			}
		}).toString();

		let current = interval.latest ? '[current]' : '';

		log.info('%s - %s (%s) - %d %s', from, till, days, sum, current);
	}
}

