import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/services",
    name: "Services",

    component: () =>
      import(/* webpackChunkName: "services" */ "../views/Services.vue"),
  },
  {
    path: "/companydetail/:id",
    name: "company-detail",
    component: () =>
      import(
        /* webpackChunkName: "companydetail" */ "../views/CompanyDetail.vue"
      ),
    params: true,
  },
  {
    path: "/companiesList/:id",
    name: "companiesList",
    component: () =>
      import(
        /* webpackChunkName: "companydetail" */ "../views/companiesList.vue"
      ),
    params: true,
  },
  {
    path: "/writereview/:id",
    name: "write-review",
    component: () =>
      import(/* webpackChunkName: "review" */ "../views/WriteReview.vue"),
  },
  {
    path: "/createcompany",
    name: "create-company",
    component: () =>
      import(
        /* webpackChunkName: "createcompany" */ "../views/CreateCompany.vue"
      ),
  },
  {
    path: "/createcategory",
    name: "create-categories",
    component: () =>
      import(
        /* webpackChunkName: "createcategory" */ "../views/CreateCategory.vue"
      ),
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Register.vue"),
  },
  {
    path: "/join",
    name: "join",
    component: () =>
      import(/* webpackChunkName: "join" */ "../views/JoinAsPro.vue"),
  },
  {
    path: "/advertise",
    name: "advertise",
    component: () =>
      import(/* webpackChunkName: "advertise" */ "../views/Advertise.vue"),
  },
  {
    path: "/faq",
    name: "faq",
    component: () =>
      import(/* webpackChunkName: "faq" */ "../views/Faq.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
