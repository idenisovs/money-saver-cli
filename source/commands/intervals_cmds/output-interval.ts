import { duration } from 'yet-another-duration';
import log4js from 'log4js';
import { Interval } from '../../shared';
import { formatDate } from '../../utils';

const log = log4js.getLogger('intervals')

export default function outputInterval(interval: Interval): void {
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