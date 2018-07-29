import Vue from 'vue'
import Router from 'vue-router'
import HOME from '../tabbar/home.vue'
import VIP from '../tabbar/vip.vue'
import SEARCH from '../tabbar/search.vue'
import SHOPCAR from '../tabbar/shopcar.vue'
import NewsList from '../components/news/NewList.vue'

import PhotoList from '../components/photos/PhotoList.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      component: HOME
    },
    {
      path: "/vip",
      component: VIP
    },
    {
      path: "/shopcar",
      component: SHOPCAR
    },
    {
      path: "/search",
      component: SEARCH
    },{
      path: "/home/newslist",
      component: NewsList
    },
    { path: '/home/photolist', component: PhotoList}
  ],
  linkActiveClass: "mui-active"
});
