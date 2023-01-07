<template>
    <aside id="sidebar">
        <div id="nav-blog" class="sidebar-item">
          <h3>puedes hacer esto</h3>
          <router-link class="btn btn-success" to="/register">Obtener Cupón</router-link>
        </div>
        <div id="search" class="sidebar-item">
          <h3>buscador</h3>
          <p>Encuentra el articulo que buscas</p>
          <form>
            <input type="text" name="search" />
            <input class="btn" type="submit" value="Buscar" name="submit" />
          </form>
        </div>
        <router-view></router-view>
      </aside>
</template>

<script>
export default {
    name:'AsideBar',
    props:[''],
    methods: {
      
    }
}
</script>

<style>

</style>