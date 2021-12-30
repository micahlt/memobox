<svelte:head>
	<title>Log In | Memobox</title>
</svelte:head>
<div class="template">
<div class="auth">
<a href="/"><img src="./src/assets/wordmark.svg" alt="Memobox logo"></a><br>
{#if state == 'continue'}
<a href="https://github.com/login/oauth/authorize?client_id={clientID}&scope=repo&redirect_uri=http://localhost:3000/auth?method=oauth">Log In with GitHub <i class="ri-github-fill"></i></a>
{:else if state == 'start'}
<a href="https://github.com/login/oauth/authorize?client_id={clientID}&scope=repo&redirect_uri=http://localhost:3000/auth?method=oauth">Sign Up with GitHub <i class="ri-github-fill"></i></a>
{:else if state == 'oauth'}
<h2>logging in...</h2>
{:else}
<a href="https://github.com/login/oauth/authorize?client_id={clientID}&scope=repo&redirect_uri=http://localhost:3000/auth?method=oauth">Log In with GitHub <i class="ri-github-fill"></i></a>
{/if}
</div>
</div>

<script>
import { onMount } from 'svelte';
export let state, clientID;
onMount(() => {
  let params = new URLSearchParams(window.location.search);
  state = params.get('method');
  fetch('/api/app-info').then((data) => {
    return data.json();
  }).then((res) => {
    clientID = res.client_id;
    return;
  });
  fetch(`/api/check-user`, {
		method: 'POST',
		body: window.localStorage.getItem('accessToken')
	}).then((res) => {
    if (res.status == 200) {
      window.location.replace('/inbox');
    }
  });
  let code = params.get('code')
  if (state == 'oauth' && code) {
    console.log(code, '<-- code')
    fetch('/api/access-token', {
      method: 'POST',
      body: code
    }).then((data) => {
      return data.json();
    }).then((res) => {
      window.localStorage.setItem('accessToken', res.token);
			window.localStorage.setItem('username', res.username);
      window.location.replace('/inbox');
    })
  }
});

</script>

<style>
.template {
  height: 100vh;
  width: 100%;
  background: var(--primary);
  background: linear-gradient(360deg, rgba(47,163,106,1) 0%, rgba(107,255,182,1) 100%);
  font-family: 'Readex Pro', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
}

.auth {
  height: 200px;
  width: 15em;
  padding: 3%;
  background: white;
  border-radius: 0.4em;
  box-shadow: rgba(0,0,0,0.3) 0 3px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.auth a:last-child {
  color: black;
  padding: 8%;
  background: white;
  color: black;
  text-decoration: none;
  border-radius: 0.4em;
  border: 1px solid black;
  transition: 0.15s;
}

.auth a:last-child:hover {
  background: black;
  color: white;
  transition: 0.2s;
}

a i {
  margin-left: .2em;
  font-size: 1.5em;
  line-height: 0;
  position: relative;
  top: 5px;
}

img {
  height: 35px;
}
</style>
