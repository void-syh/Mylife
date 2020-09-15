<template>
  <div id="Advertisement" :style="{backgroundImage:'url('+require('../assets/'+flag+'.png')+')'}">
      <button id="seconds" ref="seconds" @click="skip">{{seconds}}</button>
  </div>
</template>

<script>
export default {
    data(){
        return{
            seconds:5,
            flag:1,
        }
    },
    methods:{
        skip(){
            if(this.seconds<=3){
                this.$router.push({path:'/mainLogin/Login'});
            }
        }
    },
    mounted(){
        this.flag = parseInt(Math.random()*3+1);
        
        let interval = setInterval(() => {
            this.seconds--;
            if(this.seconds==3) this.$refs.seconds.innerText="跳过";
            if(this.seconds==0){
                clearInterval(interval);
                this.$router.push({path:'/mainLogin/Login'});
            };
        }, 1000);
    }
}
</script>

<style>
#Advertisement{
    height: 812px;
    background-size: 100%;
}
#seconds{
    width: 60px;
    height: 60px;
    float: right;
    border-radius: 100%;
}
</style>