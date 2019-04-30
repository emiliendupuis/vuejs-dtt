<template>
  <div class='Random' v-if='info'>  <!-- do not render template until info is loaded -->
    <li v-for='item in info.data.entries'>
      <div class='bs-example'>
        <div class='list-group'>
          <a class='list-group-item'>
            <h4 class='list-group-item-heading'>API NAME</h4>
            <p class='list-group-item-text'>{{ item.API }}</p>
          </a>
          <a class='list-group-item'>
            <h4 class='list-group-item-heading'>DESCRIPTION</h4>
            <p class='list-group-item-text'>{{ item.Description }}</p>
          </a>
          <a class='list-group-item'>
            <h4 class='list-group-item-heading'>AUTH</h4>
            <p class='list-group-item-text'>{{ item.Auth }}</p>
          </a>
          <a class='list-group-item'>
            <h4 class='list-group-item-heading'>HTTPS</h4>
            <p class='list-group-item-text'>{{ item.HTTPS }}</p>
          </a>
          <a class='list-group-item'>
            <h4 class='list-group-item-heading'>CORS</h4>
            <p class='list-group-item-text'>{{ item.Cors }}</p>
          </a>
          <a class='list-group-item'>
            <h4 class='list-group-item-heading'>LINK</h4>
            <p class='list-group-item-text'>{{ item.Link }}</p>
          </a>
          <a class='list-group-item'>
            <h4 class='list-group-item-heading'>Category</h4>
            <p class='list-group-item-text'>{{ item.Category }}</p>
          </a>
        </div>
        <router-link to='/Random'>
          <button @click='randomize()'>Randomize again</button> <!-- @click event on the button. Execute the randomize function -->
        </router-link>
      </div>
    </li>
    <Footer/>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios'; // we use axios to send HTTP request on REST API
import VueAxios from 'vue-axios';
import Footer from '@/Components/Footer.vue'; // import the footer

// The decorator @Component shows that  the class is a vue component
@Component({
  components: {
    Footer, // insert the footer
  },
})
export default class Home extends Vue {
private info: any = null;
public created() {
    axios
      .get('https://api.publicapis.org/random')
      .then((response) => (this.info = response));
  }

public randomize() { // randomize function : make an api call on the random method of the API
    axios
      .get('https://api.publicapis.org/random')
      .then((response) => (this.info = response));
  }
}
</script>

<style scoped>
h4,
p {
  color: #3e94ec;
}
li {
  list-style: none;
}
button {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  margin-top: 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  background-color: #3e94ec;
}
button.hover {
  background-color: #4caf50; /* Green */
  color: white;
}
.list-group {
  word-break: break-word;
}
.Random {
  margin-top: 50px;
  margin-bottom: 150px;
}
</style>