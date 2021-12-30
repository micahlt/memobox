<div class="template">
  <div class="card card-following">
    <h2 class="card-title">Users you're following</h2>
    {#each users as u}
      <User name={u.login} avatar={u.avatar_url}  />
    {/each}
  </div>
</div>

<script>
import User from './User.svelte';
import { onMount } from 'svelte';
let users = [];
onMount(() => {
  fetch(`/api/following`, {
		method: 'POST',
		body: window.localStorage.getItem('accessToken')
	}).then((res) => {
    return res.json();
  }).then((data) => {
    users = data;
    console.log(users);
  })
});
</script>
