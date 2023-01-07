<template>
  <!-- <div>
    <HeaderComponent></HeaderComponent>
    <SliderBar />
    <div class="center">
      <LastArticles />
      <AsideBar />
      <div class="clearfix"></div>
    </div>
    <FooterComponent />
  </div> -->
  <router-view></router-view>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import SliderBar from "./components/SliderBar.vue";
import AsideBar from "./components/AsideBar.vue";
import LastArticles from "./components/LastArticles.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  name: "app",
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
@import "./assets/css/styles.css";
</style>
