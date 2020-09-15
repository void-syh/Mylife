<template>
  <div class="form-background">
      <el-button icon="el-icon-back" circle @click="toLogin"></el-button>
      <el-card id="register-body">
          <div id="register-header">注册页面</div>
          <div id="register-content">
              <el-input placeholder="请输入用户名" class="register-component" v-model="username"></el-input>
              <el-input placeholder="请输入账号" class="register-component" v-model="phone"></el-input>
              <el-input placeholder="请输入密码" class="register-component" v-model="password"></el-input>
              <el-input placeholder="请再次输入密码" class="register-component" v-model="passwordRepeat"></el-input>
              <el-button id="register-button" type="primary" @click="register">注册</el-button>
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
            username:'',
            phone:'',
            password:'',
            passwordRepeat:''
        }
    },
    methods:{
        toLogin(){
            this.$router.push({path:'/mainLogin/login'})
        },
        register(){
            if(this.username==''||this.password==''||this.passwordRepeat==''||this.phone==''){
                alert('任何一项都不能为空')
            }else if(this.password!==this.passwordRepeat){
                this.passwordRepeat = '';
                this.password = '';
                alert('两次密码不一致，重新输入')
            }else{
                axios.post('http://47.102.143.184:8080/MyLife/user/register.do',qs.stringify({
                    username:this.username,
                    password:this.password,
                    phone:this.phone
                })).then(function(response){
                    console.log(response);
                    alert('注册成功')
                }).catch(function(error){
                    console.log(error);
                })
            }
        }
    }
}
</script>

<style>
#register-body{
    margin:100px 10px;
}

#register-header{
    text-align: center;
    font-size: 24px;
}

.register-component{
    margin-top: 20px;
}

#register-content{
    text-align: center;
}

#register-button{
    width: 313px;
    margin:20px 0;
}
</style>