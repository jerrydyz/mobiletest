<template>
  <div class="login">
      <div class="imgbox" style="width:6.9rem;margin:0 auto;display:flex;justify-content:space-between;">
          <img src="/static/images/index/sexiang.png" alt="" style="width:2.17rem;height:1.44rem;">
          <img src="/static/images/index/sexiang.png" alt="" style="width:2.17rem;height:1.44rem;">
          <img src="/static/images/index/sexiang.png" alt="" style="width:2.17rem;height:1.44rem;">
      </div>
    
    <div style="font-size:.32rem;">南非钻石从1.5%降到0.5%，钻石骗局终将落幕</div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      msg: ''
    }
  },
  mounted (){
    let that =this;
    this.$axios.post(this.baseURL,{id:'1'}).then(res => {    
      console.log(res);
      if(res.data.status=="ok"){
        
      }else if((res.data.status=="error")){
       
      }else if((res.data.status=="relogin")){
        
      }
    });
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div{justify-content:space-between;}
</style>
