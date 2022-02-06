const months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Dec' ];

export function formatDate(date: Date) {
	const day = date.getUTCDate();
	const month = date.getUTCMonth();
	const year = date.getUTCFullYear();

	return `${day} ${months[month]} ${year}`;
}