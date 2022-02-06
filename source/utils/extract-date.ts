export function extractDate(date: Date): string {
	const [datePart] = date.toISOString().split('T');

	return datePart;
}