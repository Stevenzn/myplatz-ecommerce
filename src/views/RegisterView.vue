<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <div class="center">
      <section id="content">
        <h1 class="subheader">Registro</h1>
        <form data-aos="fade-right" @submit.prevent="register" class="mid-form">
          <div class="form-group">
            <label for="nombre">Nombre completo</label>
            <input
              v-model="name"
              required
              autocomplete="off"
              type="text"
              name="nombre"
            />
          </div>
          <div class="form-group">
            <label for="email">Correo</label>
            <input
              v-model="email"
              required
              autocomplete="off"
              type="text"
              name="email"
            />
          </div>
          <div class="form-group">
            <label for="password">Contraseña</label>
            <input
              v-model="password"
              required
              autocomplete="off"
              type="password"
              name="password"
            />
          </div>
          <div class="form-group">
            <label for="confirm-password">Confirmar contraseña</label>
            <input
              v-model="confirm_password"
              required
              autocomplete="off"
              type="password"
              name="confirm-password"
            />
          </div>
          <div class="clearfix"></div>
          <input type="submit" value="Enviar" class="btn btn-success" />
        </form>
      </section>
      <NotaProps
        title="Hola!"
        paragraph="Completa el registro y aventurate en este mar de contenido y
            aprendizaje para tu vida laboral."
      ></NotaProps>
      <div class="clearfix"></div>
    </div>
    <FooterComponent />
  </div>
</template>
  
  <script>
import HeaderComponent from "../components/HeaderComponent.vue";
import AsideBar from "../components/AsideBar.vue";
import FooterComponent from "../components/FooterComponent.vue";
import NotaProps from "../components/NotaProps.vue";
import axios from "axios";
import enviroment from "../enviroments/enviroment.js";

export default {
  name: "RegisterView",
  components: {
    HeaderComponent,
    AsideBar,
    FooterComponent,
    NotaProps,
  },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirm_password: "",
      rol: "user",
    };
  },
  methods: {
    async register() {
      if (this.password !== this.confirm_password) {
        alert("No coinciden las contraseñas");
        return;
      } else {
        const response = await axios.post(enviroment.URL_API + "user", {
          name: this.name,
          email: this.email,
          password: this.password,
          rol: this.rol,
        });
        if (response) {
          this.$swal
          .fire({
            position: "center",
            icon: "success",
            title: "Registro exitoso!",
            showConfirmButton: false,
            timer: 2000,
          }).then(() => {
            this.$router.push("/login");
          });
        }
      }
    },
  },
};
</script>
  
  <style>
</style>

<!-- Routes
  user: Post registro "https://myplatz.herokuapp.com/api/v1/user""
  course: Get Traer cursos, Post Agg cursos (Token Validation) "https://myplatz.herokuapp.com/api/v1/course"
  login: Post "https://myplatz.herokuapp.com/api/v1/login"
  car: Get para traer, Post para agg y 2 delete (todos o individual)
  
-->