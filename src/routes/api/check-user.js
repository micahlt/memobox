export async function post(request) {
  console.log(request.body)
  let status = await fetch('https://api.github.com/user', {
  	headers: {
  		'accept': 'application/vnd.github.v3+json',
  		'Authorization': `token ${request.body}`
  	}
  }).then((res) => {
  	if (res.status == 200) {
      return 200;
    }
  })
  return {
    status
  }
}
