import { Auth } from '../api';

export async function auth() {
	console.log('Running login command!');
	await Auth.login(process.env.login!, process.env.password!);
	console.log('Done!');
}