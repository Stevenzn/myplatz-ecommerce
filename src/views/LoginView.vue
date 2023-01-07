<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <div class="center">
      <section id="content">
        <h1 class="subheader">Log In</h1>
        <form data-aos="fade-right" @submit.prevent="login" class="mid-form">
          <div class="form-group">
            <label for="email">Email</label>
            <input
              v-model="email"
              required
              autocomplete="off"
              type="text"
              name="email"
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              v-model="password"
              required
              autocomplete="off"
              type="password"
              name="password"
            />
          </div>
          <div class="clearfix"></div>
          <input type="submit" value="Enviar" class="btn btn-success" />
        </form>
      </section>
      <NotaProps
        title="¿Sabias que?"
        paragraph="La inflación del dolar en argentina está en un 83%, exacto, colombia va
        hacia allí. Saludos!"
      ></NotaProps>
      <div class="clearfix"></div>
    </div>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import axios from "axios";
import HeaderComponent from "../components/HeaderComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import NotaProps from "../components/NotaProps.vue";
import enviroment from "../enviroments/enviroment.js";

export default {
  name: "LoginView",
  components: {
    HeaderComponent,
    FooterComponent,
    NotaProps,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      const response = await axios.post(enviroment.URL_API + "login", {
        email: this.email,
        password: this.password,
      });
      if (response.data.rol == "user") {
        localStorage.setItem("token", response.data.jwtoken);
        console.log(response.data);
        this.$router.push("/courses").catch((error) => {
          let msg = error.response.data;
          console.log(msg);
        });
      } else {
        localStorage.setItem("token", response.data.jwtoken);
        this.$router.push("/admin").catch((error) => {
          let msg = error.response.data;
          console.log(msg);
        });
      }
    },
  },
};
</script>

<style>
</style>