<template>
  <div id="main-container">
    <div id="options">
      <textarea type="text" style="width: 96%;height: 99%; " v-model="optionstr"></textarea>
    </div>
    <div id="chart" ></div>
  </div>
</template>

<script >
//先要导入依赖的实例
import echarts from 'echarts'
export default {
  name: 'LineSimple',
  data() {
    return {
      optionstr:"",
      option:{
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        series: [{
          type: 'pie',
          data: [{
                    value: 100,
                    name: 'A'
                }, {
                    value: 200,
                    name: 'B'
                }, {
                    value: 300,
                    name: 'C'
                }, {
                    value: 400,
                    name: 'D'
                }]
        }]
      }
    }
  },
  //挂载前初始化echarts实例
  mounted:function() {
    this.optionstr = "option = "+JSON.stringify(this.option)
    var myChart = echarts.init(document.getElementById('chart'))
    myChart.setOption(this.option)
  }
}
</script>
<style type="text/css" scoped>
#main-container {
    position: relative;
    left: 0;
    right: 0;
    bottom: 0;
    top: 9px;
    height: 96%;
}
#options {
  float: left;
  width: 25%; 
  height: 100%; 
  margin:3px;
  border: 1px solid #f3f4f5;
}
#chart {
  width: 72%; 
  height: 500px; 
  float: left;
  /* border:1px solid rgb(180,180,180) */
}
</style>
