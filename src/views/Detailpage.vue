<template>
  <div class='Detailpage' v-if='info'> <!-- do not render template until info is loaded -->
    <li v-for='item in info.data.entries'> <!-- loop on api call result -->
      <div class='bs-example'>
        <div class='list-group'>
          <a class='list-group-item'>
            <h4 class='list-group-item-heading'>API Name</h4>
            <p class='list-group-item-text'>{{ item.API }}</p>
          </a>
          <a class='list-group-item'>
            <h4 class='list-group-item-heading'>Description</h4>
            <p class='list-group-item-text'>{{ item.Description }}</p>
          </a>
          <a class='list-group-item'>
            <h4 class='list-group-item-heading'>Auth</h4>
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
            <h4 class='list-group-item-heading'>Link</h4>
            <p class='list-group-item-text'>{{ item.Link }}</p>
          </a>
          <a class='list-group-item'>
            <h4 class='list-group-item-heading'>Category</h4>
            <p class='list-group-item-text'>{{ item.Category }}</p>
          </a>
        </div>
      </div>
    </li>
    <div id="conteneur">
      <li v-for='recom in recommandations'>
       <button  v-on:click='Title =   recom'
              @click='getTitle(Title)'> 
             {{ recom }} 
       </button>
      
      </li>
    </div>
    <Footer/>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios'; // Allows to make API Calls
import VueAxios from 'vue-axios'; // Allows to make API Calls
import Footer from '@/Components/Footer.vue'; // import footer of the page


@Component({
  components: {
    Footer,
  },
})
export default class Detailpage extends Vue { // class according to typescript standards
private Title: string = this.$store.getters.myResult;
 // Thanks to the getter function we can
 // retrieve the description stored in myResult variable (state variable)
private info: any = null;
private recommandations: string[] = [];
private i: number = 0;



public created() {
    axios.get('https://api.publicapis.org/entries?', { // api call on the entries method
        params: { // parameter in the request
          title: this.Title,
        },
      })
      .then((response) => (this.recommand(JSON.stringify(response.data.entries[0].Category)), this.info = response));
      // put the response in the info variable
  }

public recommand(categ: any) {
    categ = categ.replace('"', '');
    categ = categ.replace('"', '');
    while (this.i < 3) {
      axios.get('https://api.publicapis.org/random?', { // api call on the entries method
      params: { // parameter in the request
      category: categ,
      },
      })
      .then((response) => (this.recommandations.push(response.data.entries[0].API)));
      this.i++;
    }
  }

public getTitle(Title: any) {
  // Change the state variable (Description)
  this.$store.commit('change', this.Title);
  this.update(Title);
}

public update(Title: any) {
    axios.get('https://api.publicapis.org/entries?', { // api call on the entries method
        params: { // parameter in the request
          title: this.Title,
        },
      })      // put the response in the info variable
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
  text-align: center;
}
.Detailpage {
  margin-top: 50px;
  margin-bottom: 150px;
}
button p {
  color:white!important;
}
a
{
  color:white;
}
button {
  border: none;
  padding: 15px 32px;
  margin-top: 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  width: 100px;
  background-color: #3e94ec;
  border: 2px solid white;
  color:white;
}
button.hover {
  background-color: #4caf50; /* Green */
  color: white;
}
#conteneur
{
    display: flex;
    justify-content: center;
}

</style>