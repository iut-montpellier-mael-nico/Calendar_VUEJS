import Vue from "vue";
import Router from "vue-router";
import Register from "../components/Register.vue";
import Login from "../components/Login.vue";
import Calendar from "../components/Calendar.vue";
import EventForm from "../components/EventForm.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/About.vue")
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      name: "login",
      path: "/login",
      component: Login
    },
    {
      name: "home",
      component: Calendar,
      path: "/"
    },
    {
      name: "eventAdd",
      component: EventForm,
      path: "/event/add"
    },
    {
      name: "eventAdd",
      component: EventForm,
      path: "/event/add"
    },
  ]
});
