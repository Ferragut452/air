import Vue from 'vue'
import Vuex from 'vuex'
import users from "./modules/users.js";
import posts from "./modules/posts.js";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    users,
    posts,
  }
})
