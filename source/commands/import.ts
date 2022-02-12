import { Argv } from 'yargs';
import paymentsImport from './import/payments-import';

export const command = 'import <filename>';
export const desc = 'Import command';

export function builder(yargs: Argv) {
	yargs.positional('filename', {
		describe: 'The CSV file containing the payments data.',
		type: 'string'
	});
}

export const handler = paymentsImport;