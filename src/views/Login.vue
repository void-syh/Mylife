<template>
  <div>
      <el-card id="login-body">
          <div id="login-header">登录页面</div>
          <div id="login-content">
              <el-input placeholder="请输入账号" class="login-component" v-model="phone"></el-input>
              <el-input placeholder="请输入密码" class="login-component" v-model="password" type="password"></el-input>
              <el-button id="login-button" type="primary" @click="login">登录</el-button>
              <el-button type="primary" id="nineLogin-button" @click="toNineLogin">手势登录</el-button>
              <p id="login-reg" @click="toRegister">没有账户?点击注册</p>
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
            password:''
        }
    },
    methods:{
        toNineLogin(){
            this.$router.push({path:'/mainLogin/nineLogin'});
        },
        toRegister(){
            this.$router.push({path:'/register'});
        },
        login(){
            var _this = this;
            axios.post('http://47.102.143.184:8080/MyLife/user/login.do',qs.stringify({
                phone:_this.phone,
                password:_this.password
            })).then(function(response){
                const data = response.data;
                sessionStorage.setItem('login-flag',true);
                sessionStorage.setItem('username',data.user.username);
                sessionStorage.setItem('phone',data.user.phone);
                _this.$router.push({path:'/home/Inf/money'});
            }).catch(function(error){
                sessionStorage.setItem('login-flag',false);
                console.log(error);
                alert('登录失败');
            })
        }
    }
}
</script>

<style>
#login-body{
    margin:100px 10px;
}

#login-header{
    text-align: center;
    font-size: 24px;
}

.login-component{
    margin-top: 20px;
}

#login-content{
    text-align: center;
}

#login-button{
    width: 313px;
    margin:20px 0 0;
}

#nineLogin-button{
    width: 312px;
    margin:20px 0;
}

#login-reg{
    color:#6c5ce7;
}
</style>