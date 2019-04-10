<template>
  <div class="Categories">
    <table id="myTableCategories" class="table table-striped table-bordered" style="width:20%">
      <thead>
        <tr>
          <th>Categories</th>
        </tr>
      </thead>
      <tbody v-if="info">
        <tr v-for="item in info.data">
          <!-- loop on api result -->
          <td>{{ item }}</td>
        </tr>
      </tbody>
    </table>
    <Footer/>
    <!-- include the footer -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios"; // Axios is a Javascript library used to make HTTP requests from node.js or XMLHttpRequests
import VueAxios from "vue-axios";
import Footer from "@/Components/Footer.vue"; // import the footer

//The decorator @Component shows that  the class is a vue component
@Component({
  components: {
    Footer // insert footer of the page
  }
})
export default class Categories extends Vue {
  info: any = null;
  created() {
    axios
      .get("https://api.publicapis.org/categories")
      .then(response => (this.info = response));
  }
}
</script>

<style scoped>
#myTableCategories {
  margin-top: 100px;
  margin-left: 40%;
  margin-right: 40%;
  margin-bottom: 150px;
}
footer.page-footer {
  bottom: 0;
  color: red;
  position: fixed !important;
  width: 100%;
  height: 100px;
  margin-top: 100px;
}
</style>