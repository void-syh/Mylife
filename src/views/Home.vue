<template>
  <div>
    <el-menu
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-menu-item index="1" @click="openCompute">计算器</el-menu-item>
    <el-menu-item index="2" @click="openCalender">日历</el-menu-item>
    <el-submenu index="3">
    <template slot="title">我的图片</template>
    <el-menu-item index="3-1" @click="openPic">图片展示</el-menu-item>
    <el-menu-item index="3-2" @click="cropPic">图片上传</el-menu-item>
    </el-submenu>
    <el-menu-item index="4" @click="openInf">个人信息</el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    data() {
      return {
        isCollapse: true
      };
    },
    methods: {
      openCalender(){
        this.$router.push('/home/calender')
      },
      openCompute(){
        this.$router.push('/home/compute')
      },
      openPic(){
        this.$router.push('/home/pic')
      },
      openInf(){
        this.$router.push('/home/inf/money')
      },
      cropPic(){
        this.$router.push({path:'/home/crop'})
      },
    }
  }
</script>

<style>

</style>