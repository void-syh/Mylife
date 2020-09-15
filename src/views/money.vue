<template>
  <div id="money-body">
    <el-table :data="calendarData" height="260" :row-class-name="tableRowClassName">
      <el-table-column prop="date" label="日期" sortable></el-table-column>
      <el-table-column prop="inmoney" label="收入"></el-table-column>
      <el-table-column prop="outmoney" label="支出"></el-table-column>
    </el-table>
    <br>
    <el-table :data="calendarAll" height="150" :row-class-name="tableRowClassName">
      <el-table-column prop="index" label="月度" sortable></el-table-column>
      <el-table-column prop="inmoney" label="总收入"></el-table-column>
      <el-table-column prop="outmoney" label="总支出"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
data(){
  return{
    calendarData:[]
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
    })
    .catch(function (error) {
    console.log(error);
    })
  },
  computed:{
    calendarAll(){
      const arr = new Array(12);
      for(let i=0;i<12;i++){
        arr[i] = {
          'index':i+1,
          'inmoney':0,
          'outmoney':0
        }
      }
      for(let i=0;i<this.calendarData.length;i++){
        let date = this.calendarData[i].date.split('-');
        arr[date[1]-1].inmoney += this.calendarData[i].inmoney;
        arr[date[1]-1].outmoney += this.calendarData[i].outmoney;
      }
      return arr;
    }
  },
   methods: {
      tableRowClassName({row, rowIndex}) {
        if(row.outmoney==row.inmoney) return '';
        else if (row.inmoney-row.outmoney<0) {
          return 'warning-row';
        }else
          return 'success-row';
      }
    }
}
</script>

<style>
#money-body{
  margin:10px;
}

.el-table .warning-row {
    background: #FDE2E2;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>