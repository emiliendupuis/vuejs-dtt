import Vue from 'vue';
import Router from 'vue-router'; // import the vues components here
import Home from './views/Home.vue';

Vue.use(Router); // call the vue js router

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [ // info the routes array we cand find all the routes. 
    {
      path: '/', // link to the root. Here there is a nothing because this is the main page
      name: 'home',
      component: Home, // Name of the component too show we the user navigates on this route
      props : true, // props enabled
    },
    {
      path: '/Random',
      name: 'Random',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Random.vue'),
    },
    {
      path: '/Detailpage',
      name: 'Detailpage',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Detailpage.vue'),
    },
    {
      path: '/Categories',
      name: 'Categories',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Categories.vue'),
    },
  ],
});
