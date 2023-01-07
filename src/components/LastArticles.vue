<template>
  <section id="content">
    <h2 data-aos="fade-right" class="subheader">Ultimos articulos</h2>

    <div id="articles">
      <Articles></Articles>
      
    </div>
    <router-view></router-view>
  </section>
</template>

<script>
import Articles from './Articles.vue';
export default {
    name:'LastArticles',
    data: function(){

    },
    components: {
      Articles,
    },
    
};
</script>

<style>
</style>

<!-- axios.get('http://localhost:3000/names')
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  }); -->