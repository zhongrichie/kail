<template>
    <div class="">
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
					<router-link :to="'/home/newsinfo/'+item.id">
						<img class="mui-media-object mui-pull-left" src="../../images/455.jpg">
						<div class="mui-media-body">
							<h1>{{item.title}}</h1>
							<p class="mui-ellipsis">
                  <span>发表时间：{{item.add_time | dataFormat}}</span>
                  <span>点击次数：{{item.click}}</span>
              </p>
						</div>
					</router-link>
				</li>
			</ul>
    </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
    data: ()=>({
      newsList:[]
    }),
    created(){
      this.getNews();
    },
    methods:{
      getNews(){
        this.$http.get("api/getnewslist").then(result => {
           console.log(result.body);
           if(result.body.status == 0){
             // 如果数据返回成功的话,进行保存到一个数组中
             this.newsList = result.body.message;

           }else{
             Toast("获取数据失败!!!");
           }
        });
      }
    }
}
</script>

<style lang="less" scoped>
    .mui-table-view {
  li {
    h1 {
      font-size: 14px;
    }
    .mui-ellipsis {
      font-size: 12px;
      color: #226aff;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
