import os from 'os';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

const homedir = os.homedir();

const lookupConfig = [
	path.join(homedir, '.msrc'),
	path.join(global.basedir, '..', '.env'),
	path.join(global.basedir, '.env'),
];

let configured = false;

for (const configPath of lookupConfig) {
	if (!fs.existsSync(configPath)) {
		continue;
	}

	dotenv.config({
		path: configPath,
		override: true
	});

	configured = true;
}

if (!configured) {
	console.error('Config file not found!');
	process.exit(1);
}