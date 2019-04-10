import Vue from 'vue';
import App from './App.vue';
import router from './router'; // import our router
import store from './store'; // import our store so we can pass data between components

import 'bootstrap'; // import bootstrap library
import 'bootstrap/dist/css/bootstrap.min.css';


Vue.config.productionTip = false;

new Vue({ // defining our vue and rendering the app into it . We have to include router and store.
  router,
  store,
  el: '#app',
  render: (h) => h(App), //h, un alias pour la fonction createElement | indique le composant à construire
})
