<template>
  <div class="">

  </div>
</template>

<script>
export default {
  data: ()=>({
      pageindex: 1,
      comments:[],
      msg:''
  }),
  props:["id"],
  created(){
    this.getComments();
  },
  methods:{
    getComments(){
      this.$http.get("api/getcomments/"+this.id+"?pageindex="+this.pageIndex).then(result => {
        if(result.body.status ===0 ){
          this.comments = this.comments.concat(result.body.message);
        }
      })
    },
  postComents(){
    if(this.msg.trim().length === 0){
      Toast('请输入内容')
    }
  }
  }



}
</script>

<style lang="" scoped>

</style>
