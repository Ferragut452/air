
const auth = {
  namespaced: true,
  state: {
    mockAccount: {
      username: "test",
      password: "test",
    },
    isLoggedIn: false,
  },
  getters: {
  },
  mutations: {
    setAuth(state, payload) {
      state.isLoggedIn = payload;
    }
  },
};

export default auth;