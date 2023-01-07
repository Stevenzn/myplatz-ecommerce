<template>
  <div>
    <div class="center">
      <header class="header">
        <Logo />
        <nav id="menu">
          <ul>
            <li>
              <router-link to="/car" class="cart">
                <fa class="cart-shopping" icon="cart-shopping" />
              </router-link>
            </li>
            <li>
              <router-link class="color" to="/config" active-class="active"
                >Ajustes</router-link
              >
            </li>
            <li>
              <router-link
                v-on:click="clearLocalStorage()"
                class="color"
                to="/login"
                active-class="active"
                >Salir</router-link
              >
            </li>
          </ul>
        </nav>
        <div class="clearfix"></div>
      </header>
    </div>
    <SliderBar texto="Cursos Disponibles" link="texto"></SliderBar>
    <div class="center">
      <Articles
      data-aos="zoom-in"
      ></Articles>
      <div class="clearfix"></div>
    </div>
    <FooterComponent></FooterComponent>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import SliderBar from "../components/SliderBar.vue";
import AsideBar from "../components/AsideBar.vue";
import Logo from "../components/Logo.vue";
import FooterComponent from "../components/FooterComponent.vue";
import Articles from "../components/Articles.vue";
import axios from "axios";
export default {
  name: "HomeView",
  components: {
    HeaderComponent,
    SliderBar,
    AsideBar,
    FooterComponent,
    Logo,
    Articles,
  },
  methods: {
    clearLocalStorage() {
      localStorage.clear();
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
/* .cart{
  border:none;
  background: none;
  color: #3EB8E4;
  font-size: 18px;
    cursor: pointer;

} */

/* .cart:hover{
  color:#000;
  font-size: 20px;
} */
</style>
