const client_id = import.meta.env.VITE_CLIENT_ID;
const client_secret = import.meta.env.VITE_CLIENT_SECRET;
import { FormData } from 'formdata-polyfill/esm.min.js'
export async function post(request) {
  const code = request.body;
  let data = new FormData();
  data.append('client_id', client_id);
  data.append('client_secret', client_secret);
  data.append('code', code);
  let username;
  let token = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  }).then(async (res) => {
    let t = await res.json();
    await fetch('https://api.github.com/user', {
    	headers: {
    		'accept': 'application/vnd.github.v3+json',
    		'Authorization': `token ${t.access_token}`
    	}
    }).then(async (res) => {
    	let u = await res.json();
      username = u.login;
    });
    return t.access_token;
  });
  return {
    body: {
      token,
      username
    }
  };
}
