import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import AboutView from "../views/AboutView.vue";
import AdminView  from "../views/AdminView.vue";
import CoursesView from "../views/CoursesView.vue"
import ConfigView from "../views/ConfigView.vue"
import CarAdd from "../views/CarAdd.vue"
import ArticleInfo from "../views/ArticleInfo.vue"
/* import ErrorComponent from "../components/ErrorComponent.vue"
 */
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/admin",
      name: "admin",
      component: AdminView
    },
    {
      path: "/courses",
      name: "courses",
      component: CoursesView
    },
    {
      path: "/config",
      name: "Configview",
      component: ConfigView
    },
    {
      path: "/car",
      name: "car",
      component: CarAdd
    },
    {
      path: "/article-info",
      name: "article-info",
      component: ArticleInfo
    },
 /*    {
      path: "",
      component: ErrorComponent,
    } */
  ],
});

export default router;
