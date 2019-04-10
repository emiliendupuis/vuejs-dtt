<template>
  <div class="Detailpage" v-if="info"> <!-- do not render template until info is loaded -->
    <li v-for="item in info.data.entries"> <!-- loop on api call result -->
      <div class="bs-example">
        <div class="list-group">
          <a class="list-group-item">
            <h4 class="list-group-item-heading">API Name</h4>
            <p class="list-group-item-text">{{ item.API }}</p>
          </a>
          <a class="list-group-item">
            <h4 class="list-group-item-heading">Description</h4>
            <p class="list-group-item-text">{{ item.Description }}</p>
          </a>
          <a class="list-group-item">
            <h4 class="list-group-item-heading">Auth</h4>
            <p class="list-group-item-text">{{ item.Auth }}</p>
          </a>
          <a class="list-group-item">
            <h4 class="list-group-item-heading">HTTPS</h4>
            <p class="list-group-item-text">{{ item.HTTPS }}</p>
          </a>
          <a class="list-group-item">
            <h4 class="list-group-item-heading">CORS</h4>
            <p class="list-group-item-text">{{ item.Cors }}</p>
          </a>
          <a class="list-group-item">
            <h4 class="list-group-item-heading">Link</h4>
            <p class="list-group-item-text">{{ item.Link }}</p>
          </a>
          <a class="list-group-item">
            <h4 class="list-group-item-heading">Category</h4>
            <p class="list-group-item-text">{{ item.Category }}</p>
          </a>
        </div>
      </div>
    </li>
    <Footer/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios"; // Allows to make API Calls
import VueAxios from "vue-axios"; // Allows to make API Calls
import Footer from "@/Components/Footer.vue"; // import footer of the page

@Component({
  components: {
    Footer
  }
})
export default class Detailpage extends Vue { // class according to typescript standards
  desc: string = this.$store.getters.myResult; // Thanks to the getter function we can retrieve the description stored in myResult variable (state variable)

  info: any = null;
  created() {
    axios
      .get("https://api.publicapis.org/entries?", { // api call on the entries method 
        params: { // parameter in the request
          Description: this.desc
        }
      })
      .then(response => (this.info = response)); // put the response in the info variable 
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
.Detailpage {
  margin-top: 50px;
  margin-bottom: 150px;
}
</style>