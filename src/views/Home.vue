<template>
  <div class="home" v-if="info">
    <table class="table-fill tablesorter" id="myTable">
      <thead>
        <tr>
          <th @click="Sort()" class="text-center">{{ gridColumns[0] }}</th>
          <th @click="Sort()" class="text-center">{{ gridColumns[1] }}</th>
          <th class="text-center">{{ gridColumns[2] }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in info.data.entries.slice(0,10)">
          <td class="text-center">{{ item.API }}</td>
          <td class="text-center">{{ item.Description }}</td>
          <td class="text-center">
            <button
              v-on:click="Description =  item.Description"
              @click="getDescription(Description)"
            >
              <router-link to="/Detailpage">Details</router-link>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <Footer/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"; // import Vue, Component, Prop 
import axios from "axios"; // Allows to make API Calls
import VueAxios from "vue-axios"; // Allows to make API Calls
import store from "@/store"; 
import Footer from "@/Components/Footer.vue"; // Footer of the page
import $ from "jquery";
import "datatables.net"; // Used for DataTable function. Sort the API response. 

@Component({
  components: {
    Footer // Insert the footer in the component
  }
})
export default class Home extends Vue {
  Sort() // Sort function using Jquery
  {
    $("#myTable").DataTable({ // Jquery syntax
      paging: false, // Parameters. Disable paging, searching and info.
      searching: false,
      info: false,
      retrieve: true 
    });
  }

  gridColumns: string[] = ["API", "Description", "View more"]
  Description: string = "" // defining empty variable with typescript standards
  info: any = null;

  created() // Load data we need to display on the DOM
  {
    axios // api call with axios
      .get("https://api.publicapis.org/entries")
      .then(response => (this.info = response));
  }

  getDescription() {
    // Change the state variable (Description)
    this.$store.commit("change", this.Description);
  }
}
</script>


<style>
@import url(
  https://fonts.googleapis.com/css?family=Roboto:400,
  500,
  700,
  300,
  100
);

div.table-title {
  display: block;
  margin: auto;
  max-width: 600px;
  padding: 5px;
  width: 100%;
}
*,
::after,
::before {
  -webkit-box-sizing: unset !important;
  box-sizing: unset !important;
}
.table-title h3 {
  color: #fafafa;
  font-size: 30px;
  font-weight: 400;
  font-style: normal;
  font-family: "Roboto", helvetica, arial, sans-serif;
  text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
  text-transform: uppercase;
}

/*** Table Styles **/

.table-fill {
  background: white;
  margin: auto;
  max-width: 600px;
  padding: 5px;
  width: 100%;
  margin-top: 100px;
  margin-bottom: 130px;
  height: 100%;
}

th {
  color: white;
  background: #3e94ec;
  font-size: 18px;
  font-weight: 100;
  padding: 24px;
  text-align: center;
  vertical-align: middle;
}
.dataTables_filter,
.dataTables_info {
  display: none;
}

th:first-child {
  border-top-left-radius: 3px;
}

th:last-child {
  border-right: none;
}

tr {
  color: #666b85;
  font-size: 16px;
  font-weight: normal;
  text-shadow: 0 1px 1px rgba(256, 256, 256, 0.1);
}

tr:first-child {
  border-top: none;
}

tr:last-child {
  border-bottom: none;
}

td {
  background: #ffffff;
  padding: 20px;
  text-align: center;
  vertical-align: middle;
}

td:last-child {
  border-right: 0px;
}

th.text-left {
  text-align: center;
}

th.text-center {
  text-align: right;
}

th.text-right {
  text-align: right;
}

td.text-left {
  text-align: center;
}

td.text-center {
  text-align: center;
}

td.text-right {
  text-align: right;
}
</style>

<!--   
  <li v-for="item in info.data.entries.slice(0,10)">
    {{ item.API }} | {{ item.Description }}
  </li>

<router-link   to="/Detailpage"><td class="text-left"><button v-on:click="Description =  item.Description"  @click="getDescription()">Details</button></td></router-link>
    <li v-for="title in gridColumns">
        <div class="col col-1">{{ gridColumns[0] }} </div>
        <div class="col col-2">{{ gridColumns[1] }} </div>
       </li>
  -->
