export async function post(request) {
	console.log(request.body);
	fetch('https://api.github.com/user/repos', {
		method: 'POST',
		headers: {
			accept: 'application/vnd.github.v3+json',
			Authorization: `token ${request.body}`
		},
		body: JSON.stringify({
			name: 'my-memobox',
			private: true,
			auto_init: true
		})
	})
		.then((res) => {
			return res.json();
		})
		.then((data) => {
			console.log(data);
		});
	return {
		status: 200
	};
}
