<template>
  <div class="table">
    <form id="search">
      <input name="query" placeholder="search" v-model="searchQuery" />
    </form>
    <table>
      <thead>
        <tr>
          <th
            :key="index"
            v-for="(key, index) in keys"
            :class="sortedClass(key)"
            @click="sortBy(key)"
          >
            {{ key }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in sortedItems" :key="item.id">
          <td>{{ item.userId }}</td>
          <td>{{ item.id }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.body }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Table",
  data() {
    return {
      searchQuery: "",
      sort: {
        key: "",
        isAsc: false,
      },
    };
  },
  computed: {
    ...mapState("posts", ["posts"]),
    keys() {
      if (this.posts[0]) {
        return Object.keys(this.posts[0]);
      }
    },
    sortedItems() {
      const list = this.posts.slice();
      if (!!this.sort.key) {
        list.sort((a, b) => {
          a = a[this.sort.key];
          b = b[this.sort.key];

          return (a === b ? 0 : a > b ? 1 : -1) * (this.sort.isAsc ? 1 : -1);
        });
      }

      function toString(o) {
        Object.keys(o).forEach((k) => {
          if (typeof o[k] === "object") {
            return toString(o[k]);
          }

          o[k] = "" + o[k];
        });

        return o;
      }

      let strings = toString(list);

      return strings.filter((object) =>
        Object.values(object).some((i) => {
          return i.includes(this.searchQuery);
        })
      );
    },
  },
  methods: {
    ...mapActions("posts", ["getPosts"]),
    sortedClass(key) {
      return this.sort.key === key
        ? `sorted ${this.sort.isAsc ? "asc" : "desc"}`
        : "";
    },
    sortBy(key) {
      this.sort.isAsc = this.sort.key === key ? !this.sort.isAsc : false;
      this.sort.key = key;
    },
  },
  mounted() {
    this.getPosts();
  },
};
</script>

<style lang="scss" scoped>
table {
  border-radius: 8px;
  background-color: #fff;
  th.sorted {
    &:after {
      font-size: 12px;
    }
    &.asc::after {
      display: inline-block;
      content: "▼";
    }
    &.desc::after {
      display: inline-block;
      content: "▲";
    }
  }
}

th {
  border-radius: 8px;
  background-color: #cfcfcf;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

td {
  background-color: #f9f9f9;
  line-height: 18px;
}

th,
td {
  min-width: 120px;
  padding: 10px 20px;
}
</style>
