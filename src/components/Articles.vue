<template>
  <div v-if="courses && courses.length >= 1">
    <article
      data-aos="fade-right"
      class="article-item"
      id="item-template"
      v-for="course in courses"
      :key="course.id"
    >
      <div class="img-wrap">
        <img src="../assets/images/courses.png" alt="Paisaje" />
      </div>

      <router-link to="/article-info">{{ course.name }}</router-link>
      <span>{{ course.price }}</span>
      <span class="date">fecha</span>
      <span
        >Categoria: <strong>{{ course.category }}</strong></span
      >
      <p>{{ course.description }}</p>
      <!-- <ButtonArticles  nameButton="Comprar"></ButtonArticles> -->
      <ButtonArticles
        @click="addArticle(course.id)"
        nameButton="Añadir al carrito"
      ></ButtonArticles>
      <div class="clearfix"></div>
    </article>
    <div v-if="courses && courses.length < 1">
      <p>Aun no hay Cursos para mostrar</p>
    </div>
  </div>
  <div v-else>Cargando cursos...</div>
</template>

<script>
import ButtonArticles from "./ButtonArticles.vue";
import axios from "axios";
import enviroment from "../enviroments/enviroment.js";
export default {
  name: "Articles",
  components: {
    ButtonArticles,
  },
  data() {
    return {
      courses: [],
      id: "",
    };
  },
  mounted() {
    this.getCourses();
  },
  methods: {
    getCourses() {
      axios.get(enviroment.URL_API + "product").then((response) => {
        this.courses = response.data;
      });
    },
    async addArticle(id) {
      const response = await axios.post(
        enviroment.URL_API + "cart",
        { id },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (response.status==201) {
        this.$swal
          .fire({
            position: "center",
            icon: "success",
            title: "Añadido al carrito de compras",
            showConfirmButton: false,
            timer: 1000,
          })
          .then(() => {
            this.$router.push("/car");
          });
      }
      else{
        this.$swal
          .fire({
            position: "center",
            icon: "error",
            title: "Este producto ya existe en tu carrito!",
            showConfirmButton: false,
            timer: 1000,
          })
          .then(() => {
          });
      }
    },
  },
};
</script>

<style scoped>
/* .article-btn {
  color: #0099cc;
  background: transparent;
  border: 2px solid #0099cc;
  border-radius: 6px;
  border: none;
  padding: 12px 24px;
  text-align: center;
  display: inline-block;
  font-size: 12px;
  margin: 4px 2px;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
}
.article-btn {
  background-color: white;
  color: black;
  border: 2px solid #008cba;
}

.article-btn:hover{
  background-color: #008CBA;
      color: white;
} */
</style>