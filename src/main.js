import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
library.add(fas);

const app = createApp(App);

app.component("fa", FontAwesomeIcon);

app.use(VueSweetalert2);

app.component("font-awesome-icon", FontAwesomeIcon);

app.use(router);

app.mount("#app");
