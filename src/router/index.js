import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Cats from "../views/Cats.vue";
import Dogs from "../views/Dogs.vue";
import Pet from "../views/Pet.vue";
import Form from "../views/Form.vue";
import Users from "../views/Users.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/cats",
    name: "Cats",
    component: Cats
  },
  {
    path: "/dogs",
    name: "Dogs",
    component: Dogs
  },
  {
    path: "/pet",
    name: "Pet",
    component: Pet
  },
  {
    path: "/form",
    name: "Form",
    component: Form
  },
  {
    path: "/users",
    name: "Users",
    component: Users
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
