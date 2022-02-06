import { Intervals } from '../api';

export async function intervals() {
	const response = await Intervals.getCurrent();

	console.log(response);
}