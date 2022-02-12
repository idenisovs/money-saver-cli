import fs from 'fs';
import { Parser, parse } from 'csv-parse';

export default function makeCsvReader(filename: string): Parser {
	const parser = parse({
		columns: true,
		cast: true
	});

	return fs.createReadStream(filename).pipe(parser);
}