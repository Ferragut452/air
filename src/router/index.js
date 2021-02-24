import Vue from 'vue';
import VueRouter from 'vue-router';
const Login = () => import(/* webpackChunkName: "Login" */ '../views/Login.vue');
const Home = () => import(/* webpackChunkName: "Home" */ '../views/Home.vue');
const Table = () => import(/* webpackChunkName: "Table" */ '../views/Table.vue');
import store from "@/store";

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
    component: Home,
    meta: { requiresAuth: true }
  },
  {
    path: '/table',
    name: 'Table',
    component: Table,
    meta: { requiresAuth: true }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const isLoggedIn = store.state.auth.isLoggedIn;
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isLoggedIn) {
      next('/login')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
