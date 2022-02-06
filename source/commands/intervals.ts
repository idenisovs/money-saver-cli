import { Argv } from 'yargs';

export const command = 'intervals <command>';
export const desc = 'Interval commands';
export const builder = (yargs: Argv) => {
	return yargs.commandDir('intervals_cmds');
}