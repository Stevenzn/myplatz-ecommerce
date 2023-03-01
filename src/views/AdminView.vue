<template>
  <div class="center">
    <header class="header">
      <Logo />
      <nav id="menu">
        <ul>
          <li>
            <router-link
              to=""
              v-on:click="clearLocalStorage()"
              class="color"
              active-class="active"
              >Salir</router-link
            >
          </li>
        </ul>
      </nav>
      <div class="clearfix"></div>
    </header>
    <section id="content">
      <h1 class="subheader">Registrar nuevo curso</h1>
      <form class="mid-form" @submit.prevent="saveCourse">
        <div class="form-group">
          <label for="name">Nombre del curso</label>
          <input
            required
            autocomplete="off"
            type="text"
            name="name"
            v-model="name"
          />
        </div>
        <div class="form-group">
          <label for="price">Precio</label>
          <input
            required
            type="number"
            autocomplete="off"
            name="price"
            v-model="price"
          />
        </div>
        <div class="form-group">
          <label for="category">Categoria</label>
          <input
            autocomplete="off"
            required
            type="text"
            name="category"
            v-model="category"
          />
        </div>
        <div class="form-group">
          <label for="description">Descripcion</label>
          <textarea
            autocomplete="off"
            required
            name="description"
            id=""
            cols="30"
            rows="10"
            v-model="description"
          ></textarea>
        </div>
        <div class="clearfix"></div>
        <input type="submit" value="Enviar" class="btn btn-success" />
      </form>
    </section>
    <NotaProps title="Pestaña Admin" paragraph="Aqui va un texto"></NotaProps>
    <div class="clearfix"></div>

    <FooterComponent></FooterComponent>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import SliderBar from "../components/SliderBar.vue";
import FooterComponent from "../components/FooterComponent.vue";
import NotaProps from "../components/NotaProps.vue";
import Logo from "../components/Logo.vue";
import axios from "axios";
import enviroment from "../enviroments/enviroment.js";

export default {
  name: "AdminVue",
  components: {
    HeaderComponent,
    SliderBar,
    FooterComponent,
    NotaProps,
    Logo,
  },
  data() {
    return {
      name: "",
      price: "",
      category: "",
      description: "",
    };
  },
  methods: {
    async saveCourse() {
      if (this.name == "") {
        alert('el campo "Nombre" no puede estár vacio');
        return;
      } else if (this.price == "") {
        alert('el campo "Precio" no puede estár vacio');
        return;
      } else if (this.category == "") {
        alert('el campo "Categoria" no puede estár vacio');
        return;
      } else if (this.description == "") {
        alert('el campo "Descripción" no puede estár vacio');
        return;
      } else {
        const response = await axios.post(
          enviroment.URL_API + "product",
          {
            name: this.name,
            price: this.price,
            category: this.category,
            description: this.description,
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );

        if (response) {
          this.$swal
            .fire({
              position: "center",
              icon: "success",
              title: "Curso creado!",
              showConfirmButton: false,
              timer: 1500,
            })
            .then(() => {
                (this.name = ""),
                (this.price = ""),
                (this.category = ""),
                (this.description = "");
              
            });
        }
      }
    },
    clearLocalStorage() {
      localStorage.clear();
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.color:hover {
  background-color: #b5cbd1;
  padding: 5px 10px 5px 10px;
  border-radius: 3px;
  color: #000 !important;
}
</style>