<template>
  <div id="app">
    <div class="main-nav">
      <router-link to="/login">Login</router-link>
      <router-link to="/">Home</router-link>
      <router-link to="/table">Table</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }

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
</style>
