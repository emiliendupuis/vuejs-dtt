<template>
  <div id='app'> <!-- i decided to put the menu directly in the app.vue so we do not have to import it in every components -->
    <div id='navbar'>
      <nav class='navbar navbar-expand-lg navbar-light bg-light'> <!-- i'm using bootstrap for this navbar -->
        <a class='navbar-brand' href='#'>Welcome</a>
        <button
          class='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>
        <div class='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div class='navbar-nav'>
            <router-link class='nav-item nav-link' to='/'>Home</router-link>
            <router-link class='nav-item nav-link' to='/Random'>Random</router-link>
            <router-link class='nav-item nav-link' to='/Categories'>Categories</router-link>
          </div>
        </div>
      </nav>
    </div>
    <router-view/>
  </div>
</template>



<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #41a512;
}
#nav {
  display: inline-block;
  margin: 60px auto 45px;
  background-color: #5597b4;
  box-shadow: 0 1px 1px #ccc;
  border-radius: 2px;
}

#nav a {
  display: inline-block;
  padding: 18px 30px;
  color: #fff !important;
  font-weight: bold;
  font-size: 16px;
  text-decoration: none !important;
  line-height: 1;
  text-transform: uppercase;
  background-color: transparent;

  -webkit-transition: background-color 0.25s;
  -moz-transition: background-color 0.25s;
  transition: background-color 0.25s;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#navbar {
  overflow: hidden;
  background-color: #333;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
}
</style>
