import Vue from "vue";
import VueRouter from "vue-router";
import goods from "@/views/goods/goods";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "goods",
    component: goods
  },
  {
    path: "/rating",
    name: "rating",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "rating" */ "@/views/rating/rating")
  },
  {
    path: "/seller",
    name: "seller",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "seller" */ "@/views/seller/seller")
  },
];

const router = new VueRouter({
  routes
});

export default router;
