export class Cookies {
	static process(raw: string[]): Map<string, string> {
		const result = new Map<string, string>()

		for (let cookie of raw) {
			const [ cookieSetting ] = cookie.split(';')

			const [ key, value ] = cookieSetting.split('=');

			result.set(key, value);
		}

		return result;
	}
}