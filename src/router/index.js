import Vue from 'vue';
import VueRouter from 'vue-router';
const Login = () => import(/* webpackChunkName: "Login" */ '../views/Login.vue');
const Home = () => import(/* webpackChunkName: "Home" */ '../views/Home.vue');
const Table = () => import(/* webpackChunkName: "Table" */ '../views/Table.vue');

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/table',
    name: 'Table',
    component: Table
  }
]

const router = new VueRouter({
  routes
})

export default router
