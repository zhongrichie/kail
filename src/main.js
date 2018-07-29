// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {
  Swipe,
  SwipeItem
} from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

Vue.config.productionTip = false

// 引入vue-resource文件
import VueResource from 'vue-resource'

// 安装VueResource
Vue.use(VueResource);   
//进行全局配置
Vue.http.options.root = "http://localhost:5000/";

// 定义全局的过滤器
import moment from "moment"
Vue.filter("dataFormat",function(dataStr,pattern = "YYYY-MM-DD HH:mm:ss"){
    return moment(dataStr).format(pattern);
});

// 全局引入mint-ui组件库
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);

// 全局引入mui,方便局部使用样式
import "./mui/css/mui.min.css"
// 全局引入样式
import "./mui/css/icons-extra.css"


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: c => c(App)
})
