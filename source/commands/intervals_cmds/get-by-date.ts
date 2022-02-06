import log4js from 'log4js';
import { Intervals } from '../../api';
import CliOps from '../cli-ops';
import outputInterval from './output-interval';

const log = log4js.getLogger('intervals')

export const command = 'date <date>';
export const desc = 'Get interval by date';
export const builder = () => {}

export async function handler(args: CliOps) {
	const { date } = args;

	log.debug('Retrieving interval by date %s!', date);

	const interval = await Intervals.getByDate(date);

	if (!interval) {
		return log.warn('No interval found under specified date <%s>!', date);
	}

	outputInterval(interval);
}