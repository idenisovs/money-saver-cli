import log4js, { Configuration } from 'log4js';

const config: Configuration = {
	appenders: {
		console: {
			type: 'console'
		}
	},
	categories: {
		default: {
			appenders: ['console'],
			level: 'debug'
		}
	}
}

export function connectLogger() {
	log4js.configure(config)
}