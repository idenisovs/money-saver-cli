import log4js from 'log4js';

import PaymentCsvRecord from './payment-csv-record';
import { Intervals, Payments } from '../../api';
import { Payment } from '../../shared';

const log = log4js.getLogger('payments');

let line = 0;

export default async function savePaymentRecord(record: PaymentCsvRecord): Promise<void> {
	line++;

	const interval = await Intervals.getByDate(record.date);

	if (!interval) {
		log.warn('There is no interval for payment to belong! Payment date - <%s>, sum - <%d>, line = <%d>!', record.date, record.payment, line);
		return;
	}

	const payment = new Payment({
		time: new Date(record.date),
		sum: record.payment
	});

	await Payments.save(payment);
}