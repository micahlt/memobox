import dotenv from 'dotenv';
dotenv.config();
const client_id = process.env.VITE_CLIENT_ID;
export function get(request) {
	if (!client_id) {
		return {
			status: 500,
			body: {
				error: 'VITE_CLIENT_ID is undefined'
			}
		};
	} else {
		return {
			body: {
				client_id
			}
		};
	}
}
