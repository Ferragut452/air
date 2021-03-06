import $http from "@/store/axios-instance";



const posts = {
  namespaced: true,
  state: {
    posts: [],
  },
  getters: {
  },
  mutations: {
    setPosts(state, payload) {
      state.posts = payload;
    }
  },
  actions: {
    getPosts({ commit }) {
        return $http
          .get(
            `/posts`
          )
          .then((res) => {
            commit("setPosts", res.data.slice(0, 10));
            return res.data;
          });
      },
  }
};

export default posts;