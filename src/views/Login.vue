<template>
  <div class="login">
    <h1>Login</h1>
    <input
      type="text"
      name="username"
      v-model="input.username"
      placeholder="Username"
    />
    <input
      type="password"
      name="password"
      v-model="input.password"
      placeholder="Password"
    />
    <button type="button" v-on:click="login()">Login</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      input: {
        username: "",
        password: "",
      },
    };
  },
  computed: {
    ...mapState("auth", ["mockAccount"]),
  },
  methods: {
    ...mapMutations("auth", ["setAuth"]),
    login() {
      if (this.input.username != "" && this.input.password != "") {
        if (
          this.input.username == this.mockAccount.username &&
          this.input.password == this.mockAccount.password
        ) {
          this.setAuth(true);
          this.$router.push({ name: "Home" });
        } else {
          alert("The username and / or password is incorrect");
        }
      } else {
        alert("A username and password must be present");
      }
    },
  },
};
</script>


<style lang="scss">
.login {
  width: 500px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  margin: auto;
  margin-top: 200px;
  padding: 20px;
  input {
    padding: 5px;
    margin-right: 5px;
  }
}
</style>

