  <template>
   <div id='navbar'>
<nav class='navbar navbar-expand-lg navbar-light bg-light'>
  <a class='navbar-brand' href='#'></a>
  <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
    <span class='navbar-toggler-icon'></span>
  </button>
  <div class='collapse navbar-collapse' id='navbarNavAltMarkup'>
    <div class='navbar-nav'>
      <router-link  class='nav-item nav-link' to='/'>Home</router-link> <!-- <router-link> is the component for enabling user navigation in a router-enabled app. -->
      <router-link  class='nav-item nav-link ' to='/Random'>Random</router-link> <!-- to represents the route defined in router.ts -->
      <router-link  class='nav-item nav-link ' to='/'>Categories</router-link> 
    </div>
  </div>
</nav>
</template>


<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';
import VueAxios from 'vue-axios';


// The decorator @Component shows that  the class is a vue component
@Component({
})

export default class Menu extends Vue {
}
</script>