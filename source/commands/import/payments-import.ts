import fs from 'fs';
import log4js from 'log4js';

import CliOps from '../cli-ops';
import PaymentCsvRecord from './payment-csv-record';
import savePaymentRecord from './save-payment-record';
import makeCsvReader from './make-csv-reader';

const log = log4js.getLogger('import');

export default async function paymentsImport(args: CliOps) {
	const { filename } = args;

	log.info('Importing data from file <%s>!', filename);

	if (!fs.existsSync(filename)) {
		log.error('File <%s> is not found!', filename);
		return;
	}

	const reader = makeCsvReader(filename);

	for await (const record of reader) {
		await savePaymentRecord(record as PaymentCsvRecord);
	}
}