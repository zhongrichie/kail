<template>
  <div id="app">
    <!-- header part -->
    <mt-header fixed title="黑马程序员·Vue项目"></mt-header>
    <!-- middle part -->
    <transition>
        <router-view></router-view>
    </transition>


    <!-- footer part -->
    <mui-footer></mui-footer>
  </div>
</template>

<script>
// 引入局部组件
import footer from "./components/footer.vue"
export default {
  name: 'App',
  data(){
    return {}
  },
  components:{                          
    "mui-footer":footer
  }
}
</script>

<style lang="less" scoped>
#app{
  padding-top: 40px;
  overflow-x: hidden; // 横向超越设备的宽度的时候,进行隐藏
  .v-enter{
    opacity: 0;
    transform: translateX(100%);
  }
  .v-leave-to {
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;
  }
  .v-leave-active,
  .v-enter-active {
    transition: all 0.5s ease;
  }
}

</style>
