<template>
  <div>
    <HeaderComponent />
    <h1>Nosotros</h1>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";

export default {
  name: "AboutView",
  components: {
    HeaderComponent,
    FooterComponent
  },
};
</script>

<style>
</style>