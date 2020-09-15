<template>
  <div>
    <el-calendar id="calendar">
    <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
    <template
      slot="dateCell"
      slot-scope="{data}">
      <!--自定义内容-->
      <div>
        <div class="calendar-day" style="text-align: center">
          <el-tooltip v-if="redDate.indexOf(data.day) != -1" effect="dark" :content="content(data.day)" placement="right">
            <span class="everyDay" :style="{color:'#F56C6C'}">{{ data.day.split('-').slice(2).join('-') }}</span>
          </el-tooltip>
          <el-tooltip v-else-if="greenDate.indexOf(data.day) != -1" effect="dark" :content="content(data.day)" placement="right">
            <span class="everyDay" :style="{color:'#67C23A'}">{{ data.day.split('-').slice(2).join('-') }}</span>
          </el-tooltip>
          <el-tooltip v-else-if="normalDate.indexOf(data.day) != -1" effect="dark" :content="content(data.day)" placement="right">
            <span class="everyDay" :style="{color:'#409EFF'}">{{ data.day.split('-').slice(2).join('-') }}</span>
          </el-tooltip>
          <span v-else>{{ data.day.split('-').slice(2).join('-') }}</span>
        </div>
      </div>
    </template>
  </el-calendar>
  <div style="text-align:center">
    <h3>添加账单记录</h3>
    <el-input v-model="inmoney" placeholder="请输入收入"></el-input>
    <el-input v-model="outmoney" placeholder="请输入支出"></el-input>
    <el-input v-model="aimData" placeholder="请输入日期"></el-input>
    <el-button @click="calendarDataPush">添加</el-button>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
export default {
  data () {
    return {
      phone:'',
      aimData:"",
      inmoney:"",
      outmoney:"",
      calendarData: [],
      value: new Date(),
    }
  },
  computed: {
    // 时间高亮的数组
    redDate () {
      let ary = []
      for (let i in this.calendarData) {
        if(this.calendarData[i].inmoney<this.calendarData[i].outmoney)
        ary.push(this.calendarData[i].date)
      }
      return ary
    },
    greenDate(){
      let ary = []
      for (let i in this.calendarData) {
        if(this.calendarData[i].inmoney>this.calendarData[i].outmoney)
        ary.push(this.calendarData[i].date)
      }
      return ary
    },
    normalDate () {
      let ary = []
      for (let i in this.calendarData) {
        if(this.calendarData[i].inmoney==this.calendarData[i].outmoney)
        ary.push(this.calendarData[i].date)
      }
      return ary
    }
  },
  methods: {
    // Tooltip 文字提示
    content (date) {
      let content = ''
      for (let i in this.calendarData) {
        if (date === this.calendarData[i].date) {
          content = '收入：'+this.calendarData[i].inmoney + ` ` +'支出：'+this.calendarData[i].outmoney
        }
      }
      return content
    },
    calendarDataPush(){
      this.calendarData.push({
          'inmoney': this.inmoney,
          'outmoney': this.outmoney,
          'date': this.aimData
      })
      axios.post('http://47.102.143.184:8080/MyLife/money/insert.do',qs.stringify({
        inmoney:this.inmoney,
        outmoney:this.outmoney,
        phone:this.phone,
        date:this.aimData
      })).then(function(response){
          alert('添加成功');
      }).catch(function(error){
          console.log(error);
          alert('添加失败');
      })
    }
  },
  created(){
    this.phone = sessionStorage.getItem('phone');
    const _this = this;
    axios.get('http://47.102.143.184:8080/MyLife/money/get.do', {
    params: {
      phone:_this.phone
    }
    })
    .then(function (response) {
      _this.calendarData = response.data;
      console.log(_this.calendarData)
    })
    .catch(function (error) {
    console.log(error);
    })
  }
}
</script>

<style scoped>
.everyDay {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
}

</style>