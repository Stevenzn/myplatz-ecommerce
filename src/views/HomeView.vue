<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <SliderBar  link="Ver más" texto="Bienvenido a la mejor web de cursos." />
    <div class="center">
      <LastArticles />
      <AsideBar />
      <div class="clearfix"></div>
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import SliderBar from "../components/SliderBar.vue";
import AsideBar from "../components/AsideBar.vue";
import LastArticles from "../components/LastArticles.vue";
import FooterComponent from "../components/FooterComponent.vue";

export default {
  name: "HomeView",
  components: {
    HeaderComponent,
    SliderBar,
    AsideBar,
    LastArticles,
    FooterComponent,
  },
};
</script>

<style>
</style>