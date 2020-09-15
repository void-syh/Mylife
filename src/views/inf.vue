<template>
  <div id="inf-body">
    <div id="header">
      <el-row>
        <el-col :span="24" style="text-align:center">
          <el-avatar :size="80" :src="circleUrl"></el-avatar>
          <h1>{{this.username}}</h1>
        </el-col>
      </el-row>
    </div>
    <router-view></router-view>
    <div id="footer">
      <el-row>
        <el-col :span="6">
          <div @click="toChangePassword" class="bgred">
            <i class="el-icon-edit bigger"></i>
            <p>修改密码</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div @click="toMoney" class="bgred">
            <i class="el-icon-s-order bigger"></i>
            <p>我的账单</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div @click="toNineLogin" class="bgred">
            <i class="el-icon-thumb bigger"></i>
            <p>修改手势</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div @click="quit" class="bgred">
            <i class="el-icon-close bigger"></i>
            <p>退出登录</p>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      username:'',
      circleUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599886638436&di=6379e009b8a3a7d19bad9c06e8e5a62d&imgtype=0&src=http%3A%2F%2Fupload.1633.com%2Fupload%2Fusers%2F8565636%2Fpassport%2F20151230134631498295.jpg'
    }
  },
  created(){
    this.username=sessionStorage.getItem('username');
  },
  methods:{
    toChangePassword(){
      this.$router.push({path:'/home/inf/changePassword'});
    },
    toMoney(){
      this.$router.push({path:'/home/inf/money'});
    },
    toNineLogin(){
      this.$router.push({path:'/mainLogin/nineLogin'});
    },
    quit(){
      sessionStorage.setItem('login-flag',false);
      this.$router.push({path:'/mainLogin/login'})
    }
  }
}
</script>

<style>
#inf-body{
  height: 652px;
  background-color: #E4E4E4;
  overflow: hidden;
}

#header{
  margin-top:80px;
}

#footer{
  border-top: 1px solid #E1E1E1;
  position:absolute;
  top:712px;
  height:100px;
  width: 100%;
}

.bgred{
  text-align: center;
  height:100px;
  width: 100%;
  background-color:#F2F2F2;
}

.bigger{
  font-size: 200%;
  margin-top: 20px;
  margin-bottom: 10px;
}
</style>