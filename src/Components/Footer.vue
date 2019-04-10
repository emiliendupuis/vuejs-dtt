<template>
<div class="Footer">

<div id="footer">
    <a href="#!"><router-link   to="/">Home page</router-link></a> <!-- <router-link> is the component for enabling user navigation in a router-enabled app. -->
    <a href="#!"><router-link   to="/Random">Random page</router-link></a>
    <a href="#!"><router-link   to="/Categories">Categories page</router-link></a>
</div>
  <!-- Footer -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

//The decorator @Component shows that  the class is a vue component
@Component ({
 })
export default class Footer extends Vue {

}
</script>

<style  scoped>
#footer
{
    text-align: center;
    background-color: #3e94ec!important;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 75px;
    width: 100%;
    bottom: 0;
    position: fixed;

}
a 
{
    color:white;
    margin:auto;
    font-size: 1.1em;
}
</style>
