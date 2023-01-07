<template>  
  <div data-aos="zoom-in" id="slider" class="slider-big">
    <h1 data-aos="zoom-in-down">{{texto}}</h1>
    <router-link data-aos="zoom-in" to="/register" class="btn-white">{{link}}</router-link>
    <router-view  />
  </div>
</template>

<script>
export default {
  name: "SliderBar",
  props: ['texto', 'link']
};
</script>

<style>
</style>