<script>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'

export default {
  components: { RouterLink, RouterView, HelloWorld },
  props: {
    response: Object,
  },
  data() {}
}
</script>


<template>
  <div class="my-works">
    <h1>我的作品集</h1>
    <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/my-works-1">作品一</RouterLink>
    </nav>
  </div>
  <RouterView />
</template>

<style scoped>
@media (min-width: 1024px) {
  .my-works {
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 70%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  display: flex;
  /* flex-direction: column; */
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
