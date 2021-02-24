<template>
  <div class="home">
    <div class="users">
      <div class="list">
        <ul :key="index" v-for="(user, index) in users">
          <li class="current" v-if="index == current">
            <span>Id: {{ user.id }}</span>
            <span>Name: {{ user.name }}</span>
            <span>Username: {{ user.username }}</span>
            <span>E-mail: {{ user.email }}</span>
            <span>Phone: {{ user.phone }}</span>
            <span>Website: {{ user.website }}</span>
            <span>Company: {{ user.company.name }}</span>
            <span>Company type: {{ user.company.bs }}</span>
            <span>Slogan: {{ user.company.catchPhrase }}</span>
            <span>City: {{ user.address.city }}</span>
            <span>Street: {{ user.address.street }}</span>
            <span>Building: {{ user.address.suite }}</span>
          </li>
        </ul>
      </div>
      <div class="nav">
        <div class="left">
          <button v-if="hasPrevUsers" @click.prevent="prevUser">Prev</button>
        </div>
        <div class="right">
          <button v-if="hasNextUsers" @click.prevent="nextUser">Next</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      current: 0,
    };
  },
  computed: {
    ...mapState("users", ["users"]),
    hasNextUsers() {
      return this.current < this.users.length - 1;
    },
    hasPrevUsers() {
      return this.current > 0;
    },
  },
  methods: {
    ...mapActions("users", ["getUsers"]),
    nextUser: function () {
      this.current++;
    },
    prevUser: function () {
      this.current--;
    },
  },
  mounted() {
    this.getUsers();
  },
};
</script>


<style scoped lang="scss">
.list {
  background-color: #fff;
  border-radius: 8px;
}
.nav {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  button {
    background-color: #fff;
    border-radius: 8px;
    border: 1px solid #cfcfcf;
    outline: none;
    cursor: pointer;
    font-size: 18px;
  }
}
.current {
  padding: 20px;

  span {
    display: block;
    border-bottom: 1px solid #cfcfcf;
    &:last-child {
      border-bottom: none;
    }
  }
}
</style>