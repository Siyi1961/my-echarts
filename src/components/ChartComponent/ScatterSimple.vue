<template>
  <div id="main-container">
    <div id="chart" ></div>
  </div>
</template>

<script >
//先要导入依赖的实例
import echarts from 'echarts'
export default {
  name: 'ScatterSimple',
  data() {
    return {
      option: {
        xAxis: {},
        yAxis: {},
        series: [{
            symbolSize: 20,
            data: [
                [10.0, 8.04],
                [8.0, 6.95],
                [13.0, 7.58],
                [9.0, 8.81],
                [11.0, 8.33],
                [14.0, 9.96],
                [6.0, 7.24],
                [4.0, 4.26],
                [12.0, 10.84],
                [7.0, 4.82],
                [5.0, 5.68]
            ],
            type: 'scatter'
        }]
      }
    }
  },
  //挂载前初始化echarts实例
  mounted:function() {
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
}
#chart {
  width: 100%; 
  height: 500px; 
  /* border:1px solid rgb(180,180,180) */
}
</style>
