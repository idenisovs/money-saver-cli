import { Intervals } from '../api';

export async function intervals() {
	await Intervals.getCurrent();
}