<template>
  <div id="changePassword-body">
    <el-card>
      <div style="text-align:center"><h3>修改密码</h3></div>
      <div id="changePassword-content">
      <el-input placeholder="请输入新密码" class="register-component" v-model="password" type="password"></el-input>
      <el-input placeholder="请再次输入密码" class="register-component" v-model="passwordRepeat" type="password"></el-input>
      <el-button id="changePassword-button" type="primary" @click="changepassword">修改密码</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
export default {
  data(){
    return{
      phone:'',
      password:'',
      passwordRepeat:''
    }
  },
  methods:{
    changepassword(){
      const _this = this;
      if(this.password==''||this.passwordRepeat==''){
        alert('任何一项都不能为空')
      }else if(this.password!==this.passwordRepeat){
        this.passwordRepeat = '';
        this.password = '';
        alert('两次密码不一致，重新输入')
      }else{
      axios.post('http://47.102.143.184:8080/MyLife/user/changePwd.do',qs.stringify({
        phone:_this.phone,
        password:_this.password
      })).then(function(response){
          alert('修改成功');
          sessionStorage.setItem('login-flag',false);
          _this.$router.push({path:'/mainLogin/Login'});
      }).catch(function(error){
          console.log(error);
          alert('修改失败');
      })
      }
    }
  },
  created(){
    this.phone = sessionStorage.getItem('phone');
  }
}
</script>

<style>
#changePassword-button{
  width: 313px;
  margin:20px 0;
}

#changePassword-body{
    margin:10px;
}
</style>