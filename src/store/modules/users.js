import $http from "@/store/axios-instance";



const users = {
  namespaced: true,
  state: {
    users: [],
  },
  getters: {
  },
  mutations: {
    setUsers(state, payload) {
      state.users = payload;
    }
  },
  actions: {
    getUsers({ commit }) {
        return $http
          .get(
            `/users`
          )
          .then((res) => {
            console.log('users :>> ', res.data);
            commit("setUsers", res.data);
            return res.data;
          });
      },
  }
};

export default users;
