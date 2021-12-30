<div class="user" transition:fade="{{delay: 10, duration: 300}}">
    <div class="user-image">
      <img src={avatar} alt="user avatar">
    </div>
    <div class="user-name">
      { name }
    </div>
</div>

<script>
export let name, avatar;
import { fade } from 'svelte/transition';
</script>

<style>
.user:first-of-type {
  margin-top: 10px;
}

.user {
  display: grid;
  grid-template-columns: 30px 1fr;
  margin-top: 5px;
  width: max-content;
}

.user-image img {
  height: 30px;
  border-radius: 5px;
}

.user-name {
  margin-left: 10px;
  display: flex;
  align-self: center;
}
</style>
