<template>
  <div id="app">
    <div v-if="isLoggedIn" class="main-nav">
      <router-link to="/">Home</router-link>
      <router-link to="/table">Table</router-link>
    </div>
    <button class="logout" v-if="isLoggedIn" v-on:click="logout()">
      Logout
    </button>
    <router-view />
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapState("auth", ["isLoggedIn"]),
  },
  methods: {
    ...mapMutations("auth", ["setAuth"]),
    logout() {
      this.setAuth(false);
      this.$router.push({ name: "Login" });
    },
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: "Cairo", sans-serif;
  font-size: 16px;
  background-color: rgb(203, 245, 255);
}

button {
  font-family: "Cairo", sans-serif;
}

h2 {
  font-size: 22px;
}

a {
  text-decoration: none;
  display: block;
  color: #000;
}
img {
  width: 100%;
}

ul {
  margin: 0;
  padding: 0;
}

li {
  list-style-type: none;
}

#app {
  min-height: 100vh;
  margin: 0 auto;
  max-width: 1180px;
  padding-left: 40px;
  padding-right: 40px;
  position: relative;
}

.main-nav {
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  a {
    display: inline-block;
    margin-left: 10px;
    margin-right: 10px;
    padding: 5px;
    font-size: 18px;
    font-weight: bold;
    line-height: 20px;
  }
}

.logout {
  position: absolute;
  left: 40px;
  top: 0;
}
</style>
