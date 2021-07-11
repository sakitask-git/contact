import Vue from "vue";
import VueRouter from "vue-router";
import User from "../views/User.vue";
import Admin from "../views/Admin.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "User",
    component: User,
    children: [
      {
        path: "",
        name: "Index",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "index" */ "../views/Index.vue"),
      },
      {
        path: "confirm",
        name: "Confirm",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "confirm" */ "../views/Confirm.vue"),
      },
      {
        path: "thanks",
        name: "Thanks",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "thanks" */ "../views/Thanks.vue"),
      },
    ]
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin
  }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
