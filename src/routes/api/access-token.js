import dotenv from 'dotenv';
dotenv.config();
const client_id = process.env.VITE_CLIENT_ID;
const client_secret = process.env.VITE_CLIENT_SECRET;
import { FormData } from 'formdata-polyfill/esm.min.js';
export async function post(request) {
	const code = request.body;
	let data = new FormData();
	data.append('client_id', client_id);
	data.append('client_secret', client_secret);
	data.append('code', code);
  console.log('Recieved OAuth code', code);
  console.log(`Using ${client_id} as ID and ${client_secret} as secret`);
  console.log(`Form data:`);
  for (var value of data.values()) {
    console.log(value);
  }
	let username;
	let token = await fetch('https://github.com/login/oauth/access_token', {
		method: 'POST',
		body: data,
		headers: {
			Accept: 'application/json'
		}
	}).then(async (res) => {
		let t = await res.json();
    console.log('Access token info: ', t);
		let userData = await fetch('https://api.github.com/user', {
			headers: {
				accept: 'application/vnd.github.v3+json',
				Authorization: `token ${t.access_token}`
			}
		});
		let u = await userData.json();
		username = u.login;
		return t.access_token;
	});
	return {
		body: {
			token,
			username
		}
	};
}
