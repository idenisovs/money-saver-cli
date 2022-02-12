import log4js from 'log4js';
import CliOps from '../cli-ops';

const log = log4js.getLogger('import');

export default function paymentsImport(args: CliOps) {
	log.info('I`m ok!');

	const { filename } = args;

	if (filename) {
		log.info('Importing data from file <%s>!', filename);
	}
}