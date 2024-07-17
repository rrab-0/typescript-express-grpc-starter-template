import {
	ResponderBuilder,
	ServerInterceptingCall,
	ServerListenerBuilder,
} from "@grpc/grpc-js"

function logger(format: any, ...args: any[]) {
	console.log(`LOG (server):\t${format}\n`, ...args)
}

export function loggerInterceptor(methodDescriptor: any, call: any) {
	const listener = new ServerListenerBuilder()
		.withOnReceiveMessage((message, next) => {
			logger(
				`Receive a message ${JSON.stringify(
					message
				)} at ${new Date().toISOString()}`
			)
			next(message)
		})
		.build()
	const responder = new ResponderBuilder()
		.withStart((next) => {
			next(listener)
		})
		.withSendMessage((message, next) => {
			logger(
				`Send a message ${JSON.stringify(message)} at ${new Date().toISOString()}`
			)
			next(message)
		})
		.build()
	return new ServerInterceptingCall(call, responder)
}
