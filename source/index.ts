import CliOps from './commands/cli-ops';

global['basedir'] = __dirname;

import './utils/dotenv';
import yargs, { Argv } from 'yargs';

import { auth, connectLogger } from './middleware';
import { intervals } from './commands';

(yargs as Argv<CliOps>)(process.argv.slice(2))
	.middleware([ connectLogger, auth ])
	.command('intervals', 'Intervals operations', () => {}, intervals)
	.argv;