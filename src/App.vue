<template>
  <div id="app">
    <b-navbar id="appNavBar" sticky>
      <b-navbar-nav>
          <b-nav-item variant="dark" to="/" exact>Home</b-nav-item>
          <b-nav-item to="/projects">Projects</b-nav-item>    
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
          <b-nav-item to="/contact">Contact Me!</b-nav-item>    
      </b-navbar-nav>
    </b-navbar> 
    <router-view id="appBody" />
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
  /* color palette: https://paletton.com/#uid=6460u0k3i7H4cW86XjVs9gqI6df */
  /* if you see a lot of !important's here, it's because bootstrapvue uses them and I'm overriding something */
  .pageTitle {
      text-align: center;
      font-size: 1.7em;
      margin-top: 20px;
  }

  #app .router-link-active {
    border-bottom: 2px solid rgb(219, 216, 243);
    border-bottom-width: thin;
  }

  #appNavBar {
    background-color: rgb(39, 39, 43);
    box-shadow: 0px 4px 7px rgb(92, 89, 110);
    /*margin-bottom: 30px;*/
  }

  .navbar-nav .nav-link{
    color:rgb(213, 225, 242)!important;    
  }

  .navbar-nav .nav-link:hover{
    color:white!important;
  }

  .appPage {
    margin: 0% 5% 0% 5%;
  }
</style>
