export async function post(request) {
	console.log(request.body);
	let following = await fetch('https://api.github.com/user/following?per_page=15', {
		headers: {
			accept: 'application/vnd.github.v3+json',
			Authorization: `token ${request.body}`
		}
	}).then((res) => {
		return res.json();
	});
	return {
		body: following
	};
}
