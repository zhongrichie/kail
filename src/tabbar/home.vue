<template>
    <div class="home">
<mt-swipe :auto="2000">
  <mt-swipe-item v-for="item in getLunBolist" :key="item.url">
      <img :src="item.img" alt="">
  </mt-swipe-item>
</mt-swipe>

<!-- 九宫格改造 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
		                    <img src="../images/menu1.png" alt="">
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../images/menu2.png" alt="">
		                    <div class="mui-media-body">图片分享</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../images/menu3.png" alt="">
		                    <div class="mui-media-body">商品购买</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../images/menu4.png" alt="">
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../images/menu5.png" alt="">
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../images/menu6.png" alt="">
		                    <div class="mui-media-body">联系我们</div></a></li>
		        </ul>
    </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      getLunBolist: [] // 用于保存轮播图的数组
    };
  },
  created() {
    this.getLunbo();
  },
  methods: {
    getLunbo() {
      this.$http.get("api/getlunbo").then(function(res) {
        // 判断服务器传递过来的数据
        if (res.body.status == 0) {
          this.getLunBolist = res.body.message;
        } else {
          Toast("加载轮播失败!!!");
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    &:nth-child(1) {
      background: skyblue;
    }
    &:nth-child(2) {
      background: pink;
    }
    &:nth-child(3) {
      background: hotpink;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.mui-grid-view.mui-grid-9 {
    background: #fff;
    border: 0;
    img {
        width:60px;
        height:60px
    }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border:0;
}
</style>