<svelte:head>
	<title>Memobox</title>
</svelte:head>
<div class="template" transition:fade="{{delay: 10, duration: 300}}">
<nav>
		<img src="./src/assets/wordmark.svg" alt="Memobox logo">
    </nav>
    <main>
      <div class="header">
        <div class="header-inner">
          <h1>Safe & private memos.</h1>
          <div class="header-buttons" clear="both">
            <a href="/auth?method=start" class="header-button header-button-primary">GET STARTED</a>
            <a href="/auth?method=continue" class="header-button header-button-secondary">LOG IN</a>
          </div>
        </div>
      </div>
      <div class="about">
        <div class="about-inner">
          <div class="about-col">
            <h2><i class="ri-timer-flash-fill"></i><br>
            Passive inbox</h2>
            <p>A contact method that doesn't get in your way.  Check your Box whenever you want, or don't.</p>
          </div>
          <div class="about-col">
          <h2><i class="ri-money-dollar-box-fill"></i><br>
            Completely free</h2>
          <p>All your messages go to a private repository with unlimited storage, powered by GitHub.</p>
          </div>
        </div>
      </div>
    </main>
</div>

<script>
import { fade } from 'svelte/transition';
import { onMount } from 'svelte';
onMount(() => {
	console.log(window.localStorage.getItem('accessToken'))
	fetch(`/api/find-repo`, {
		method: 'POST',
		body: window.localStorage.getItem('accessToken')
	});
})
</script>

<style>
.template {
  min-height: 100vh;
  font-family: 'Readex Pro', sans-serif;
}

nav {
  height: 60px;
  display: block;
  box-shadow: rgba(0,0,0,0.3) 0 1px 8px;
  background: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
}

nav img {
  height: 30px;
  margin: 15px;
  margin-left: 20px;
}

.header {
  height: 100vh;
  width: 100%;
  background: var(--primary);
  background: linear-gradient(360deg, rgba(47,163,106,1) 0%, rgba(107,255,182,1) 100%);
  display: grid;
  color: white;
  text-align: center;
  align-items: center;
}

.header-inner {
  height: max-content;
}

.header h1 {
  font-family: 'Cal Sans', sans-serif;
  font-size: clamp(2em, 6vw, 4em);
}

.header-buttons {
  margin: auto;
  margin-top: 0.4em;
  display: flex;
  width: max-content;
}

.header-button {
  color: var(--dark-primary);
  text-decoration: none;
  background: rgba(255,255,255,1);
  font-size: clamp(.8em, 1.1vw, 1em);
  padding: .8em 1.2em;
  border-radius: 0.4em;
  transition: background 0.2s, color 0.1s, transform 0.2s;
}

.header-button-primary {
  margin-right: 1em;
}

.header-button-secondary {
  background: rgba(76, 208, 143, 1);
  color: white;
  border: 2px solid white;
}

.header-button:hover {
  background: var(--primary);
  background: linear-gradient(360deg, rgba(47,163,106,1) 0%, rgba(107,255,182,1) 100%);
  transform: translateY(8%);
  color: white;
}

.about {
  height: 50vh;
  width: 100%;
  display: grid;
  align-items: center;
  position: relative;
}

.about-inner {
  margin: auto;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: absolute;
  top: -20%;
  left: 50%;
  transform: translateX(-50%);
  width: 69vw;
}

.about-col {
  padding: 8%;
  background: white;
  border-radius: 0.4em;
  box-shadow: rgba(0,0,0,0.3) 0 3px 8px;
}

.about-col:first-of-type {
  margin-right: 10%;
}

.about h2 {
  background: -webkit-linear-gradient(50deg, var(--primary), var(--dark-primary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'Cal Sans', sans-serif;
  font-size: clamp(1.8em, 5vw, 3em);
}

.about p {
  color: black;
}

.about h2 i {
  font-size: clamp(2em, 7vw, 4em);
}

@media only screen and (max-width: 730px) {
  .about-inner {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    width: 80vw;
  }
  .about-col:first-of-type {
    margin: auto;
    margin-bottom: 20px;
  }
}
</style>
