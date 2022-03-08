<template>
  <nav>
    <router-link to="/">Información</router-link> |
    <router-link to="/registro">Añadir Usuario</router-link> |
    <router-link to="/contacto">Contacto</router-link> |
    <!--<router-link to="/consultar">Tabla de Usuarios</router-link> | -->
     <router-link to="/register">Registar Sesión</router-link> |
     <router-link to="/login">Iniciar Sesión</router-link> 
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
