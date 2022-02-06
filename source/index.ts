import CliOps from './commands/cli-ops';

global['basedir'] = __dirname;

import './utils/dotenv';
import yargs, { Argv } from 'yargs';

import { auth, connectLogger } from './middleware';

(yargs as Argv<CliOps>)(process.argv.slice(2))
	.middleware([ connectLogger, auth ])
	.commandDir('commands')
	.demandCommand()
	.help()
	.argv;