<template>
  <header id="header">
    <div class="center">
      <Logo/>
      <nav id="menu">
        <ul>
          <li><router-link active-class="active" to="/">Inicio</router-link></li>
          <li><router-link to="/about" active-class="active">Acerca de nosotros</router-link></li>
          <li><router-link active-class="active" to="/register">Registro</router-link></li>
          <li><router-link to="/login" active-class="active">Log In</router-link></li>
        </ul>
      </nav>
      <div class="clearfix"></div>
    </div>
  </header>
</template>

<script>
import Logo from "../components/Logo.vue"
export default {
  name: "HeaderComponent",
  components:{
    Logo,
  }
};
</script>

<style>
</style>