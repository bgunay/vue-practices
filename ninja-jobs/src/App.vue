<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link :to="{ name: 'About' }">About</router-link>
    <router-link :to="{ name: 'Jobs' }">Jobs</router-link>
  </div>

  <button @click="redirect">Redirect</button>
  <button @click="back">Go back</button>
  <button @click="forward">Go forward</button>

  <router-view/>
</template>

<script>


import router from "@/router";

export default {
  methods: {
    redirect() {
      router.push({name: 'Home'})
    },
    back() {
      router.go(-1)
    },
    forward() {
      router.go(1)
    }
  }
}
</script>

<style>

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}

button {
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
}
</style>
